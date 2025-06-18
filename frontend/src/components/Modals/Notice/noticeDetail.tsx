// src/components/Modals/Notice/noticeDetail.tsx

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../../ui/button";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{notice.title}</DialogTitle>
        </DialogHeader>
          <DialogDescription />
        <Card>
          <CardContent>
            <Card>{notice.content}</Card>
            {dateFormat(notice.startDate)} - {dateFormat(notice.endDate)}
          </CardContent>
        </Card>
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
