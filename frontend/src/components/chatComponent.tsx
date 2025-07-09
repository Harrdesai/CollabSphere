// src/components/chatComponent.tsx
import { useEffect, useState } from "react";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { ChevronDownIcon, SendHorizonal, SquarePen, Trash2 } from "lucide-react";
import moment from "moment";

import useChatStore from "@/store/useChat.Store";
import chatMessageSchema from "@/zodSchema/chatMessage.Schema";

interface ChatComponentProps {
  teamsData: any[];
  userId: string;
}
const ChatComponent = ({teamsData, userId} : ChatComponentProps) => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [editingMessage, setEditingMessage] = useState<any>(null);

  const { sendMessage, updateMessage, deleteMessage } = useChatStore();

  const dateFormat = (date: any) => {
    const formattedDate = moment(date)
      .utcOffset(5.5)
      .format("MMM D, YYYY h:mm A");
    return formattedDate;
  };
  
  const editMessageTime = 285000;
  const deleteMessageTime = 105000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const chatMessageForm = useForm<z.infer<typeof chatMessageSchema>>({
    resolver: zodResolver(chatMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onChatMessageSubmit = async( teamId: string, chatId: string, data: z.infer<typeof chatMessageSchema> ) => {
    if (editingMessage) {
      await updateMessage(teamId, editingMessage.id, data);
      setEditingMessage(null);
    } else {
      await sendMessage(chatId, teamId, data);
    }
    chatMessageForm.reset();
  }

  const handleEditClick = ( message: z.infer<typeof chatMessageSchema> ) => {
    setEditingMessage(message);
    chatMessageForm.setValue("message", message.message); 
  };

  const handleMessageDelete = async (teamId: string, messageId: string) => {
    await deleteMessage(teamId, messageId);
  }
  if (!Array.isArray(teamsData) || teamsData.length === 0) {
    return <div>No Teams Data Available</div>;
  }
  return (
    <Card className="flex w-full gap-2 p-2">
      {teamsData.map((team: any) => (
        <Card
        key={team.id}
        className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0"
        >
          <CardTitle className="text-md">{team.title}</CardTitle>
          {team.chats?.map((chat: any) => (
            <Card
              className="flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl"
              key={chat.id}
            >
              <CardTitle className="text-sm mt-2 ">{chat.title}</CardTitle>
              <ScrollArea className="rounded-2xl h-[72vh] border">
                {chat.messages?.map((message: any) => {

                  const messageCreationTime = new Date(message.createdAt).getTime();
                  const isEditOptionVisible = messageCreationTime + editMessageTime > currentTime;
                  const isDeleteOptionVisible = messageCreationTime + deleteMessageTime > currentTime;

                  return(
                  <Card
                    className="flex w-full p-0 m-0 border-0 shadow-none rounded-2xl"
                    key={message.id}
                  >
                    {message.userId === userId ? (
                      <div
                        className="flex justify-end w-full gap-2 items-center"
                        key={message.id}
                      >
                        {isEditOptionVisible && (
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <ChevronDownIcon className="h-6 w-6 text-muted-foreground" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem
                                  onClick={() => handleEditClick(message)}>
                                <SquarePen />
                                Edit
                              </DropdownMenuItem>
                            {isDeleteOptionVisible && 
                              <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => handleMessageDelete(team.id, message.id)}>
                                <Trash2 className="text-destructive" />
                                Delete
                              </DropdownMenuItem>
                            }
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                        <Card className="flex p-2 pt-0 gap-0 max-w-[80%]">
                          {message.message}
                          <CardFooter className="flex pl-0 pr-0 mt-2 justify-end text-xs w-full">
                            {dateFormat(message.createdAt)}
                          </CardFooter>
                        </Card>
                      </div>
                    ) : (
                      <div
                        className="flex justify-start w-full"
                        key={message.id}
                      >
                        <Card className="flex p-2 pt-0 gap-0 max-w-[80%] dark:bg-neutral-800 text-primary border-dashed">
                          <CardTitle className="text-sm pl-0 dark:text-muted-foreground font-normal">{`${message.user.firstName} ${message.user.lastName}`}</CardTitle>
                          {message.message}
                          <CardFooter className="flex pl-0 pr-0 mt-2 justify-end text-xs w-full">
                            {dateFormat(message.createdAt)}
                          </CardFooter>
                        </Card>
                      </div>
                    )}
                  </Card>
                )})}
              </ScrollArea>
              <Form {...chatMessageForm}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onChatMessageSubmit(team.id, chat.id, chatMessageForm.getValues());
                  }}
                  className="flex gap-2 w-full"
                >
                  <FormField
                    control={chatMessageForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input className="w-full" {...field}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                  <Button hidden={!chatMessageForm.formState.isValid} type="submit" variant={"ghost"} size={"icon"}><SendHorizonal /></Button>
                </form>
              </Form>
            </Card>
          ))}
        </Card>
      ))}
    </Card>
  );
};

export default ChatComponent;