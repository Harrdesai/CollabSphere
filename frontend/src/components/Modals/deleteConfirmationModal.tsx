import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import useInvitationStore from "@/store/useInvitation.store";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void
  data: any
}

const DeleteConfirmationModal = ({isOpen, onClose, data}: DeleteConfirmationModalProps) => {

  const { cancelInvitation, fetchPendingInvitations, isLoading } = useInvitationStore();

  const handleDelete = async (id: string) => {
    const response = await cancelInvitation(id);

    if (response.statusCode === 200) {
      onClose();
      fetchPendingInvitations(data?.teamId);
    }
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="rounded-3xl bg-accent">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            This action will permanently delete this invitation sended to <strong className="text-foreground border-b pb-1 border-foreground"> {data?.member?.firstName} {data?.member?.lastName}</strong>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-foreground hover:bg-destructive/60"
            onClick={() => handleDelete(data?.id)}
            disabled={isLoading}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteConfirmationModal