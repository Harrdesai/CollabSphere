// src/components/Modals/rejectInvitationConfirmationModal.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import useInvitationStore from "@/store/useInvitation.store";

interface rejectInvitationConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void
  data: any
}

const RejectInvitationConfirmationModal = ({isOpen, onClose, data}: rejectInvitationConfirmationModalProps) => {

  const { rejectTeamInvitation, isLoading } = useInvitationStore();

  const handleRejectInvitation = async (id: string) => {

    const response = await rejectTeamInvitation(id);

    if (response.statusCode === 200) {
      onClose();
    }
  }
  
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="rounded-3xl bg-accent">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            This action will permanently delete this invitation Received from <strong className="text-foreground border-b pb-1 border-foreground"> {data?.team?.title}</strong> wth designation of <strong className="text-foreground border-b pb-1 border-foreground">{data?.designation}</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-foreground hover:bg-destructive/60"
            onClick={() => handleRejectInvitation(data?.id)}
            disabled={isLoading}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default RejectInvitationConfirmationModal