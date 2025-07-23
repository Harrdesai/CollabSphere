// src/components/Modals/Notice/updateNotice.tsx

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@/components/ui/dateTimePicker";

import noticeSchema from "@/zodSchema/notice.Schema";
import useNoticeBoardStore from "@/store/useNoticeBoard.store";

export interface NoticeUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: any;
}

const NoticeUpdateModal = ({ isOpen, onClose, notice }: NoticeUpdateModalProps) => {
  const { updateNotice } = useNoticeBoardStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const noticeForm = useForm({
    resolver: zodResolver(noticeSchema),
    defaultValues: {
      id: notice.id,
      teamId: "",
      title: "",
      content: "",
      startDate: new Date(Date.now() + 5 * 60 * 1000),
      endDate: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  const onSubmit = async (data: any) => {
    console.log(`Data: ${JSON.stringify(data)}`);
    const response = await updateNotice(notice.id, notice.teamId, data);
    console.log(response)
    if (response.status === 200) {
    noticeForm.reset();
    onClose();
    } else {
      setErrorMessage(response.errors?.error || "Something went wrong.");
    }
  };
  
  useEffect(() => {
    if (notice) {
      noticeForm.setValue("id", notice.id);
      noticeForm.setValue("teamId", notice.teamId);
      noticeForm.setValue("title", notice.title);
      noticeForm.setValue("content", notice.content);
      noticeForm.setValue("startDate", new Date(notice.startDate));
      noticeForm.setValue("endDate", new Date(notice.endDate));
    }
  }, [notice, onSubmit]);
  

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-1/2 lg:max-1/2 min-w-full rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          Create Notice
        </DialogTitle>
        <DialogDescription />
        {errorMessage && <p className="text-destructive text-xl">{errorMessage}</p>}
        {JSON.stringify(noticeForm.formState.errors)}
        <Form {...noticeForm}>
          <form onSubmit={noticeForm.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={noticeForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the Notice Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={noticeForm.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter the Notice Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={noticeForm.control}
              name="startDate"
              render={({ field }) => (
                <DateTimePicker
                  field={field}
                  label="Select start time"
                  onChange={(date) => noticeForm.setValue("startDate", date)}
                />
              )}
            />

            <FormField
              control={noticeForm.control}
              name="endDate"
              render={({ field }) => (
                <DateTimePicker
                  field={field}
                  label="Select end time"
                  onChange={(date) => noticeForm.setValue("endDate", date)}
                />
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeUpdateModal;