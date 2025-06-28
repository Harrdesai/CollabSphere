// src/components/Modals/Notice/noticeDetail.tsx

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import moment from "moment";
import type { NoticeProps } from "@/page/HomePage";
export interface NoticeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: NoticeProps;
}
const NoticeDetailModal = ({
  isOpen,
  onClose,
  notice,
}: NoticeDetailModalProps) => {
  const dateFormat = (date: any) => {
    const formattedDate = moment(date)
      .utcOffset(5.5)
      .format("MMM D, YYYY h:mm A");
    return formattedDate;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          {notice.title}
        </DialogTitle>
        <DialogDescription className="pl-8">
          {notice.content}
        </DialogDescription>
        <Label className="text-base font-normal text-primary">
          Published On: 
          <span className="font-light">{dateFormat(notice.startDate)} </span>
        </Label>
        <Label className="text-base font-normal text-primary">
          Expires On: 
          <span className="font-light">{dateFormat(notice.endDate)} </span>
        </Label>
        <DialogFooter className="flex flex-col gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeDetailModal;
