// src/components/Modals/rejectConfirmationModal.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import useInvitationStore from "@/store/useInvitation.store";

interface rejectConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void
  data: any
}

const RejectConfirmationModal = ({isOpen, onClose, data}: rejectConfirmationModalProps) => {

  const { rejectTeamJoiningRequest, isLoading } = useInvitationStore();

  const handleRejectJoinRequest = async (id: string, teamId: string) => {

    const response = await rejectTeamJoiningRequest(id, teamId);

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
            This action will permanently delete this invitation of <strong className="text-foreground border-b pb-1 border-foreground"> {data?.member?.firstName} {data?.member?.lastName}</strong> wth designation of <strong className="text-foreground border-b pb-1 border-foreground">{data?.designation}</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-foreground hover:bg-destructive/60"
            onClick={() => handleRejectJoinRequest(data?.id, data?.teamId)}
            disabled={isLoading}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default RejectConfirmationModal