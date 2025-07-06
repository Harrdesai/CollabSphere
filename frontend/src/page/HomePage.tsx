// src/page/HomePage.tsx
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import moment from "moment";

import { useAuthStore } from "@/store/useAuthStore";
import NoticeDetailModal from "@/components/Modals/Notice/noticeDetail";
import NoticeCreateModal from "@/components/Modals/Notice/createNotice";
import CreateTeamModal from "@/components/Modals/Teams/createTeam";
import { IdCard, Mail, Shield, StickyNote } from "lucide-react";
import { Label } from "@/components/ui/label";
import useInvitationStore from "@/store/useInvitation.store";
import DeleteRequestConfirmationModal from "@/components/Modals/deleteRequestConfirmationModal";
import RejectInvitationConfirmationModal from "@/components/Modals/rejectInvitationConfirmationModal";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

const HomePage = () => {
  const { authUserDetails, getUserDetails } = useAuthStore();
  const { fetchPendingJoinRequests, pendingInvitations, acceptTeamInvitation, isLoading } = useInvitationStore();


  useEffect(() => {
    getUserDetails();
  }, []);

  const [activeTab, setActiveTab] = useState("noticeBoard");
  // const [_, forceUpdate ] = useState(0);
  const [noticeDetailModalOpem, setNoticeDetailModalOpen] = useState(false);
  const [selectedNoticeDetail, setSelectedNoticeDetail] = useState<NoticeProps | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [ createNoticeModalOpen, setCreateNoticeModalOpen ] = useState(false);
  const [createTeamModalOpen, setCreateTeamModalOpen] = useState(false);
  const [deleteRequestConfirmationModalOpen, setDeleteRequestConfirmationModalOpen] = useState(false);
  const [rejectInvitationConfirmationModalOpen, setRejectInvitationConfirmationModalOpen] = useState(false);
  const [invitationDetails, setInvitationDetails] = useState<any>(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => forceUpdate((prev) => prev + 1), 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const dateFormat = (date: any) => {
    const formattedDate = moment(date)
      .utcOffset(5.5)
      .format("MMM D, YYYY h:mm A");
    return formattedDate;
  };

  const countdown = (date: any) => {
    const targetDate = new Date(date).getTime();
    const currentTime = new Date().getTime();

    const diff = targetDate - currentTime;
    if (diff <= 0) return "Event has passed";

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    return `${d} d ${h} h ${m} m ${s} s`;
  };

  const handleNoticeDetail = (notice: NoticeProps) => {
    setSelectedNoticeDetail(notice);
    setNoticeDetailModalOpen(true);
  };

  const handleCreateNotice = () => {
    setCreateNoticeModalOpen(true);
  };
  
  const handleCreateTeam = () => {
    setCreateTeamModalOpen(true);
    console.log(`clicked`);
  }

  const handleDeleteConfirmation = (invitation: any) => {
    console.log(`invitation`, invitation);
    setInvitationDetails(invitation);
    setDeleteRequestConfirmationModalOpen(true);
  }

  const handleAcceptJoiningInvitation = async (invitationId: string) => {
    await acceptTeamInvitation(invitationId);
    fetchPendingJoinRequests();
  }

  const handleRejectJoiningInvitation = async (invitation: any) => {
    setInvitationDetails(invitation);
    setRejectInvitationConfirmationModalOpen(true);
  }

  useEffect(() => {
    
    if (!deleteRequestConfirmationModalOpen) {
      fetchPendingJoinRequests();
    }
  }, [ deleteRequestConfirmationModalOpen ]);

  if (!authUserDetails) {
    return <div>Loading...</div>;
  }
  const teamsData = authUserDetails.teams;

  const renderTabContent = () => {
    switch (activeTab) {
      case "noticeBoard":
        return (
          <Card className="flex w-full gap-2 p-2 h-full">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                Notice Board
              </CardTitle>
            </CardHeader>
            <ScrollArea className="rounded-2xl max-h-[75vh] border">
              <Card className="flex flex-col w-full border-none p-0">
                {teamsData.map((team: any) => {
                  const isExpandable = team.notices?.length > 3;
                  const visibleNotices = expanded
                    ? team.notices
                    : team.notices?.slice(0, 3);
                  return (
                    <Card
                      className="flex flex-col w-full p-2 border-2 shadow-none gap-2 m-0"
                      key={team.id}
                    >
                      <div className="flex justify-between">
                        <CardTitle className="pl-4 text-xl bg-accent w-fit rounded-full dark:bg-accent pr-4 pb-1">
                        {team.title}
                      </CardTitle>
                      <Button
                        className="text-3xl px-2 pb-1"
                        onClick={() => handleCreateNotice()}
                      >
                        +
                      </Button>
                      </div>
                      {team.notices?.length > 0 && (
                        <CardDescription className="pl-8">
                          Here is a notice of {team.title}
                        </CardDescription>
                      )}

                      {visibleNotices?.map((notice: any, index: number) => {
                        const isThirdNotice =
                          index === 2 && !expanded && isExpandable;
                        return (
                          <div className="relative" key={notice.id}>
                            <Card
                              onClick={() => handleNoticeDetail(notice)}
                              className={`flex flex-col w-full p-2 pt-0 gap-2 m-0 border-2 rounded-2xl dark:bg-neutral-800 text-primary border-dashed ${
                                isThirdNotice ? "blur-sm" : ""
                              }`}
                            >
                              {notice.title}
                              <CardFooter className="flex pl-0 pr-0 justify-between text-xs">
                                <p>Expires in {countdown(notice.endDate)}</p>
                                <p>Published on {dateFormat(notice.startDate)}</p>
                              </CardFooter>
                            </Card>

                            {/* 🔽 Overlay Button only on 3rd card */}
                            {isThirdNotice && (
                              <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-neutral-100/90 dark:from-neutral-800/90 to-transparent rounded-2xl">
                                <Button onClick={() => setExpanded(true)}>
                                  Expand All
                                </Button>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Collapse button after all notices */}
                      {expanded && isExpandable && (
                        <Button
                          onClick={() => setExpanded(false)}
                          className="mt-2 self-center w-full"
                        >
                          Collapse
                        </Button>
                      )}
                    </Card>
                  );
                })}
              </Card>
            </ScrollArea>
            {/* {JSON.stringify(teamsData.map((team: any) => team.chats))} */}
          </Card>
        );
      case "teamsJoined":
        return (
          <Card className="flex w-full gap-2 p-2 h-full">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                List of Teams
              </CardTitle>
            </CardHeader>
            <ScrollArea className="rounded-2xl max-h-[75vh] border-none">
              <Card className="flex flex-col gap-2 w-full border-none p-0">
                {teamsData.map((team: any) => {
                  return (
                    <Card
                      className="flex flex-col w-full p-2 border-2 shadow-none gap-2 m-0"
                      key={team.id}
                    >
                      <div className="flex justify-between">
                        <CardTitle className="pl-4 text-xl bg-accent w-fit rounded-full dark:bg-accent pr-4 pb-1">
                          {team.title}
                        </CardTitle>
                        {/* {JSON.stringify(team)} */}
                        <Button variant={"destructive"}>
                          Leave Team
                        </Button>
                      </div>
                      <CardDescription className="ml-8">
                        {team.about}
                        {console.log(team)}
                      </CardDescription>
                      <Label className="text-xl text-primary ml-2">Team Members :</Label>
                      {team.members.filter((member:any) => member.userId !== authUserDetails.userId).map((member: any, index: number) => (
                        <Label className="text-base font-normal text-primary ml-6"
                          key={member.userId}
                        >
                          {`(${index + 1})`} {member.firstName} {member.lastName}{" "}
                          {member.isTeamLeader === true && (
                            <Label className="border-2 rounded-full px-2 w-32 bg-muted py-1 h-6 m-1">
                              <Shield className="h-4 w-4" />
                              Team Leader
                            </Label>
                          )}
                        </Label>
                      ))}
                    </Card>
                  );
                })}
              </Card>
            </ScrollArea>
          </Card>
        );
      case "invitationsAndJoinRequests":
        return (
          <Card className="flex gap-2 p-2 h-full">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r h-10 dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                Invitations and Team Join Requests
              </CardTitle>
            </CardHeader>
            <ScrollArea className="rounded-2xl max-h-[75vh] border-0">
              <Card className="flex flex-col w-full border-none p-2">
                {/* {JSON.stringify(pendingInvitations)} */}
                
                {pendingInvitations?.map((invitation: any) => {
                  return (
                    <Card key={invitation.id} className="p-2 gap-0">
                      <CardHeader className="flex justify-between flex-wrap px-0">
                      <CardTitle>
                        {invitation?.team?.title}
                      </CardTitle>
                      {invitation?.isInvitation ? (
                        <div>
                        <Button className="w-min" variant={"outline"}
                          onClick={() => { handleAcceptJoiningInvitation(invitation.id) }}
                          disabled={isLoading}
                        >
                          Accept
                        </Button>
                        <Button className="w-min" variant={"destructive"}
                          onClick={() => {handleRejectJoiningInvitation(invitation) }}
                        >
                          Decline
                        </Button>
                        </div>
                      ) : (
                        <Button className="w-min" variant={"destructive"} 
                          onClick={() => { handleDeleteConfirmation(invitation) }}
                        >
                          Cancel
                        </Button>
                      )}
                      </CardHeader>
                      <Label className="text-xl font-normal text-primary mt-2">
                        Role:{" "}
                        <span className="font-light text-primary">
                          {invitation.designation}
                        </span>
                      </Label>

                      <Label className="text-xl font-normal text-primary mt-2">
                        Requested On: {" "}
                        <span className="font-light text-primary">
                          {moment(invitation.createdAt).local().format("LLL")}
                        </span>
                      </Label>
                    </Card>
                  );
                })}
              </Card>
            </ScrollArea>
          </Card>
        );
    }
  };

  return (
    <Card className="flex w-full flex-row items-center gap-2 justify-center p-2 h-[88vh]">
      {/* <pre>{JSON.stringify(authUser, null, 2)}</pre> */}
      <Card className="flex w-2/3 gap-2 p-2 h-full">
        <CardHeader className="flex w-full">
          <Button
            className={`gap-2 ${
              activeTab === "noticeBoard" ? "bg-muted-foreground text-secondary" : ""
            } w-min`}
            onClick={() => setActiveTab("noticeBoard")}
            variant="link"
          >
            <StickyNote className="w-4 h-4" />
            Notice Board
          </Button>
          <Button
            className={`tab gap-2 ${
              activeTab === "teamsJoined" ? "bg-muted-foreground text-secondary" : ""
            } w-min`}
            onClick={() => setActiveTab("teamsJoined")}
            variant="link"
          >
            <IdCard className="w-4 h-4" />
            Teams Joined
          </Button>
          <Button
            className={`tab gap-2 ${
              activeTab === "invitationsAndJoinRequests" ? "bg-muted-foreground text-secondary" : ""
            } w-min`}
            onClick={() => {setActiveTab("invitationsAndJoinRequests");
                            fetchPendingJoinRequests();
                          }}
            variant="link"
          >
            <Mail className="w-4 h-4" />
            Invitations & Join Requests
          </Button>
        </CardHeader>
        {renderTabContent()}
      </Card>
      <Card className="flex w-1/3 gap-2 p-2 border-0 pt-0 justify-between h-full ">
      <Button
        onClick={() => handleCreateTeam()}
        className="text-xl px-2 pb-1"
      >
        Create Team
      </Button>
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
                {chat.messages?.map((message: any) => (
                  <Card
                    className="flex w-full p-0 m-0 border-0 shadow-none rounded-2xl"
                    key={message.id}
                  >
                    {message.userId === authUserDetails.userId ? (
                      <div className="flex justify-end w-full" key={message.id}>
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
                ))}
              </Card>
            ))}
          </Card>
        ))}
      </Card>
      </Card>
      {/* Modal */}

      <NoticeCreateModal
        isOpen={createNoticeModalOpen}
        onClose={() => setCreateNoticeModalOpen(false)}
      />

      <NoticeDetailModal
        isOpen={noticeDetailModalOpem}
        onClose={() => setNoticeDetailModalOpen(false)}
        notice={selectedNoticeDetail ?? ({} as NoticeProps)}
      />

      <CreateTeamModal
        isOpen={createTeamModalOpen}
        onClose={() => setCreateTeamModalOpen(false)}
      />

      <DeleteRequestConfirmationModal
        isOpen={deleteRequestConfirmationModalOpen}
        onClose={() => setDeleteRequestConfirmationModalOpen(false)}
        data={invitationDetails}
      />

      <RejectInvitationConfirmationModal
        isOpen={rejectInvitationConfirmationModalOpen}
        onClose={() => setRejectInvitationConfirmationModalOpen(false)}
        data={invitationDetails}
      />
    </Card>
  );
};

export default HomePage;