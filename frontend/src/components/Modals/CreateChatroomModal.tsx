// src/components/Modals/CreateChatroomModal.tsx

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import chatRoomSchema from "@/zodSchema/chatRoom.Schema";
import useChatStore from "@/store/useChat.Store";

export interface CreateChatroomProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
}

const CreateChatroomModal = ({ isOpen, onClose, teamId }: CreateChatroomProps) => {

  const { createChatRoom } = useChatStore();

  const createChatRoomForm = useForm({
    resolver: zodResolver(chatRoomSchema),
    defaultValues: {
      title: "",
      about: "",
    },
  });

  const onSubmit = async (chatRoomDetails: any) => {
    console.log(`Data: ${JSON.stringify(chatRoomDetails)}`);

    await createChatRoom(teamId, chatRoomDetails);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Create Chat Room</DialogTitle>
          <DialogDescription>
            Create a chat room for your team.
          </DialogDescription>
        <Form {...createChatRoomForm}>
          <form onSubmit={createChatRoomForm.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={createChatRoomForm.control}
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
                control={createChatRoomForm.control}
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
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
};

export default CreateChatroomModal