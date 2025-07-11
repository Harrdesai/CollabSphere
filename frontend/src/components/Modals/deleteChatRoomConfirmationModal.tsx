// src/components/Modals/deleteChatRoomConfirmationModal.tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import useChatStore from "@/store/useChat.Store";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void
  teamId: string;
  chatRoomId: string;
  teamTitle: string;
  chatRoomTitle: string
}

const DeleteChatRoomConfirmationModal = ({isOpen, onClose, teamId, chatRoomId, teamTitle,chatRoomTitle}: DeleteConfirmationModalProps) => {

  const { deleteChatRoom, isLoading } = useChatStore();

  const handleDelete = async (teamId: string, chatRoomId: string) => {
    const response = await deleteChatRoom( teamId, chatRoomId);

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
            This action will permanently delete <strong className="text-foreground border-b border-foreground"> {chatRoomTitle}</strong> from <strong className="text-foreground border-b border-foreground"> {teamTitle}</strong> team.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-foreground hover:bg-destructive/60"
            onClick={() => handleDelete(teamId, chatRoomId)}
            disabled={isLoading}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteChatRoomConfirmationModal