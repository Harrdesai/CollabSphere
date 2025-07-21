// src/components/Modals/deleteConfirmationModal.tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import useNoticeBoardStore from "@/store/useNoticeBoard.store";
import moment from "moment";
import { useEffect, useState } from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const DeleteNoticeConfirmationModal = ({ isOpen, onClose, data }: DeleteConfirmationModalProps) => {
  const { deleteNotice, isLoading } = useNoticeBoardStore();

  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async (id: string) => {
    const response = await deleteNotice(id, data?.teamId);
    if (response.statusCode === 200) {
      onClose();
    } else {
      setErrorMessage(response.errors?.error || "Something went wrong.");
    }
  };

  useEffect(() => {
    setErrorMessage("");
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-3xl bg-accent">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-600 dark:to-stone-400 p-1 px-4 w-fit rounded-full">
          {data?.title}
        </DialogTitle>
        <DialogDescription />
        {errorMessage && <p className="text-destructive text-xl">{errorMessage}</p>}
        <div className="space-y-2 text-sm">
          <div>
            <Label className="text-xl">Content</Label>
            <p className="ml-4 text-foreground text-base">{data?.content}</p>
          </div>

          <div>
            <Label className="text-base">Start Date:</Label>
            <span className="ml-2 text-foreground">{moment(data?.startDate).utcOffset(5.5).format("MMM D, YYYY h:mm A")}</span>
          </div>

          <div>
            <Label className="text-base">End Date:</Label>
            <span className="ml-2 text-foreground">{moment(data?.endDate).utcOffset(5.5).format("MMM D, YYYY h:mm A")}</span>
          </div>

          <div className="flex items-center">
            <Label className="text-base">Status:</Label>
            <span className="ml-2 text-foreground">{data?.status}</span>
          </div>
        </div>

        <div className="pt-2 text-base text-primary font-normal text-end">
          Are you sure you want to discard this notice?
        </div>

        {JSON.stringify(data)}
        <DialogFooter className="justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <Button
            className="bg-destructive text-foreground hover:bg-destructive/70"
            onClick={() => handleDelete(data?.id)}
            disabled={isLoading}
          >
            {isLoading ? "Discarding..." : "Discard"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default DeleteNoticeConfirmationModal