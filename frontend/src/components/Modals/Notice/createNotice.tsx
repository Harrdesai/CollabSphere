// src/components/Modals/Notice/createNotice.tsx

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

import DatePickerField from "@/components/DateField";
import noticeSchema from "@/zodSchema/notice.Schema";

export interface NoticeCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoticeCreateModal = ({ isOpen, onClose }: NoticeCreateModalProps) => {
  const [open, setOpen] = React.useState(false);

  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const notice = useForm({
    resolver: zodResolver(noticeSchema),
    defaultValues: {
      title: "",
      content: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const onSubmit = async (data: any) => {
    console.log(`Data: ${JSON.stringify(data)}`);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-1/2 lg:max-1/2 min-w-full rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          Create Notice
        </DialogTitle>
        <DialogDescription />
        <Form {...notice}>
          <form onSubmit={notice.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={notice.control}
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
              control={notice.control}
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
            <DatePickerField
              control={notice.control}
              name="startDate"
              label="Start Date"
              value={new Date()}
              formatDate={(date) => date.toLocaleDateString()}
            />
            <DatePickerField
              control={notice.control}
              name="endDate"
              label="End Date"
              value={new Date()}
              formatDate={(date) => date.toLocaleDateString()}
            />
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
            <Label htmlFor="date" className="px-1">
              Date of birth
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="w-48 justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeCreateModal;