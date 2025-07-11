// src/components/Modals/updateChatroomDetailsModal.tsx

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import chatRoomSchema from "@/zodSchema/chatRoom.Schema";
import useChatStore from "@/store/useChat.Store";
import { useEffect } from "react";

export interface CreateChatroomProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
  chatRoomId: string;
  chatRoomTitle: string;
  chatRoomAbout: string;
}

const UpdateChatroomDetailsModal = ({ isOpen, onClose, teamId, chatRoomId, chatRoomTitle, chatRoomAbout }: CreateChatroomProps) => {

  const { updateChatRoomDetails } = useChatStore();

  const updateChatRoomForm = useForm({
    resolver: zodResolver(chatRoomSchema),
    defaultValues: {
      title: chatRoomTitle,
      about: chatRoomAbout,
    },
  });

    useEffect(() => {
    if (isOpen) {
      updateChatRoomForm.reset({
        title: chatRoomTitle,
        about: chatRoomAbout,
      });
    }
  }, [isOpen, chatRoomTitle, chatRoomAbout, updateChatRoomForm]);
  const onSubmit = async (chatRoomDetails: any) => {

    await updateChatRoomDetails(teamId, chatRoomId, chatRoomDetails);
    updateChatRoomForm.reset();
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Update Chat Room Details</DialogTitle>
        <Form {...updateChatRoomForm}>
          <form onSubmit={updateChatRoomForm.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={updateChatRoomForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={updateChatRoomForm.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea placeholder="About" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-6">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Update</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
};

export default UpdateChatroomDetailsModal