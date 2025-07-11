// src/components/Modals/deleteConfirmationModal.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import useTeamStore from "@/store/useTeam.store";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
  teamTitle: string;
}

const DeleteTeamConfirmationModal = ({isOpen, onClose, teamId, teamTitle}: DeleteConfirmationModalProps) => {

  const { deleteTeam, isLoading } = useTeamStore();

  const handleDelete = async (teamId: string) => {
    const response = await deleteTeam(teamId);

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
            This action will permanently delete this team <br/><strong className="text-foreground border-b pb-1 border-foreground"> {teamTitle} </strong>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-foreground hover:bg-destructive/60"
            onClick={() => handleDelete(teamId)}
            disabled={isLoading}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteTeamConfirmationModal