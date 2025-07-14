// src/components/chatComponent.tsx
import { useEffect, useState } from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { ChevronDownIcon, Ellipsis, Plus, SendHorizonal, SquarePen, Trash2 } from "lucide-react";
import moment from "moment";

import useChatStore from "@/store/useChat.Store";
import chatMessageSchema from "@/zodSchema/chatMessage.Schema";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import CreateChatroomModal from "./Modals/CreateChatroomModal";
import UpdateChatroomDetailsModal from "./Modals/updateChatroomDetailsModal";
import DeleteChatRoomConfirmationModal from "./Modals/deleteChatRoomConfirmationModal";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

interface ChatComponentProps {
  teamsData: any[];
  userId: string;
}
const ChatComponent = ({teamsData, userId} : ChatComponentProps) => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [editingMessage, setEditingMessage] = useState<any>(null);
  const [createChatRoomModalOpen, setCreateChatRoomModalOpen] = useState(false);
  const [passTeamIdToCreateChatRoom, setPassTeamIdToCreateChatRoom] = useState("");
  const [updateChatRoomDetailsModalOpen, setUpdateChatRoomDetailsModalOpen] = useState(false);
  const [passTeamIdToUpdateChatRoomDetails, setPassTeamIdToUpdateChatRoomDetails] = useState("");
  const [passChatRoomIdToUpdateChatRoomDetails, setPassChatRoomIdToUpdateChatRoomDetails] = useState("");
  const [passChatRoomTitleToUpdateChatRoomDetails, setPassChatRoomTitleToUpdateChatRoomDetails] = useState("");
  const [passChatRoomAboutToUpdateChatRoomDetails, setPassChatRoomAboutToUpdateChatRoomDetails] = useState("");
  
  const [deleteChatRoomAlertModalOpen, setDeleteChatRoomAlertModalOpen] = useState(false);
  const [passTeamIdToDeleteChatRoom, setPassTeamIdToDeleteChatRoom] = useState("");
  const [passChatRoomIdToDeleteChatRoom, setPassChatRoomIdToDeleteChatRoom] = useState("");
  const [passChatRoomTitleToDeleteChatRoom, setPassChatRoomTitleToDeleteChatRoom] = useState("");
  const [passTeamTitleToDeleteChatRoom, setPassTeamTitleToDeleteChatRoom] = useState("");

  const [includeInactive, setIncludeInactive] = useState(false);

  const { sendMessage, updateMessage, deleteMessage } = useChatStore();

  const handleCreateChatRoom = async (teamId: string) => {
    setPassTeamIdToCreateChatRoom(teamId);
    setCreateChatRoomModalOpen(true);
  }

  const handleUpdateChatRoomDetails = async (teamId: string, chatRoomId: string, chatRoomTitle: string, chatRoomAbout: string) => {
    setPassTeamIdToUpdateChatRoomDetails(teamId);
    setPassChatRoomIdToUpdateChatRoomDetails(chatRoomId);
    setPassChatRoomTitleToUpdateChatRoomDetails(chatRoomTitle);
    setPassChatRoomAboutToUpdateChatRoomDetails(chatRoomAbout);
    setUpdateChatRoomDetailsModalOpen(true);
  }

  const handleDeleteChatRoom = async (teamId: string, chatRoomId: string, chatRoomTitle: string, teamTitle: string) => {
    console.log(`teamid------${teamId}, chatRoomId------${chatRoomId}`);
    setPassTeamIdToDeleteChatRoom(teamId);
    setPassChatRoomIdToDeleteChatRoom(chatRoomId);
    setPassChatRoomTitleToDeleteChatRoom(chatRoomTitle);
    setPassTeamTitleToDeleteChatRoom(teamTitle);
    setDeleteChatRoomAlertModalOpen(true);
  }

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
    <Card className="flex w-full gap-2 p-0 border-0">
      <Label className="pl-4 p-2">
        <Checkbox
          id="includeInactive"
          checked={includeInactive}
          onCheckedChange={(checked) => setIncludeInactive(!!checked)}
        />
        Include Inactive Roles
      </Label>
      {teamsData.map((team: any) => (
        <Card
        key={team.id}
        className="flex flex-col w-full p-0 border-0 shadow-none gap-2 m-0"
        >
          <div className="flex justify-between">
          <CardTitle className="text-md">
            {team.title}
          </CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Plus className="text-background font-extrabold bg-muted-foreground rounded-full w-8"
                onClick={() => handleCreateChatRoom(team.id)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a new chat Room</p>
            </TooltipContent>
          </Tooltip>
          </div>
          <ScrollArea className="rounded-2xl h-[70vh] border-0">
            {team.chats?.map((chat: any) => (
              includeInactive || chat.isActive ? (
                <Card
                  className={`w-full p-2 pt-0 gap-2 ${
                    !chat.isActive ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  key={chat.id}
                >
                  <div className="flex justify-between">
                  <CardTitle className="text-sm mt-2 flex ">{chat.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger hidden={!chat.isActive}>
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => handleUpdateChatRoomDetails(team.id, chat.id, chat.title, chat.about)}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteChatRoom(team.id, chat.id, chat.title, team.title)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </div>
                  <CardDescription className="ml-4"> 
                    {chat.about}
                  </CardDescription>
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
                                    onClick={() => handleEditClick(message)}
                                  >
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
                            <Card className="flex p-2 pb-1 pt-0 gap-0 max-w-[80%]">
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
                            <Card className="flex p-1 pr-2 gap-0 max-w-[80%] bg-neutral-100 dark:bg-neutral-800 text-primary border-dashed">
                              <CardTitle className="text-sm dark:bg-muted-foreground dark:text-background bg-muted-foreground text-background font-normal">{`${message.user.firstName} ${message.user.lastName}`}</CardTitle>
                              <span className="dark:text-foreground ml-1">{message.message}</span>
                              <CardFooter className="flex pl-0 pr-0 mt-2 justify-end text-xs w-full">
                                {dateFormat(message.createdAt)}
                              </CardFooter>
                            </Card>
                          </div>
                        )}
                      </Card>
                    )})}
                  {/* </ScrollArea> */}
                  {chat.isActive ? (
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
                  ): null}
                </Card>
              ) : null
            ))}
          </ScrollArea>
        </Card>
      ))}

      <CreateChatroomModal
        teamId={passTeamIdToCreateChatRoom!}
        isOpen={createChatRoomModalOpen}
        onClose={() => setCreateChatRoomModalOpen(false)}
      />

      <UpdateChatroomDetailsModal
        teamId={passTeamIdToUpdateChatRoomDetails!}
        chatRoomId={passChatRoomIdToUpdateChatRoomDetails!}
        chatRoomTitle={passChatRoomTitleToUpdateChatRoomDetails!}
        chatRoomAbout={passChatRoomAboutToUpdateChatRoomDetails!}
        isOpen={updateChatRoomDetailsModalOpen}
        onClose={() => setUpdateChatRoomDetailsModalOpen(false)}
      />

      <DeleteChatRoomConfirmationModal
        teamId={passTeamIdToDeleteChatRoom!}
        chatRoomId={passChatRoomIdToDeleteChatRoom!}
        teamTitle={passTeamTitleToDeleteChatRoom!}
        chatRoomTitle={passChatRoomTitleToDeleteChatRoom!}
        isOpen={deleteChatRoomAlertModalOpen}
        onClose={() => setDeleteChatRoomAlertModalOpen(false)}
      />
    </Card>
  );
};

export default ChatComponent;