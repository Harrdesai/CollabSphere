// src/page/TeamLeaderHomePage.tsx
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import moment from "moment";
import { CalendarDays, IdCard, Mail, Plus, Shield, StickyNote, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import NoticeDetailModal from "@/components/Modals/Notice/noticeDetail";
import NoticeCreateModal from "@/components/Modals/Notice/createNotice";
import DeleteConfirmationModal from "@/components/Modals/deleteConfirmationModal";
import RejectConfirmationModal from "@/components/Modals/rejectConfirmationModal";
import RemoveMemberModal from "@/components/Modals/removeMemberModal";
import { useAuthStore } from "@/store/useAuthStore";
import useInvitationStore from "@/store/useInvitation.store";
import useTimelineStore from "@/store/useTimeline.store";
import { actionLabelConvert, designationLabelConvert } from "@/lib/helper";
import ChatComponent from "@/components/chatComponent";

export interface NoticeProps {
  id: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

const TeamLeaderHomePage = () => {
  const { authUserDetails, getUserDetails } = useAuthStore();
  const { fetchPendingInvitations, pendingInvitations, acceptTeamJoiningRequest, isLoading } = useInvitationStore();
  const { fetchTimelineOfTeam, timelineDetails, isTimelineLoading } = useTimelineStore();

  useEffect(() => {
    getUserDetails();
  }, []);

  const [activeTab, setActiveTab] = useState("noticeBoard");
  // const [_, forceUpdate] = useState(0);
  const [passTeamId, setPassTeamId] = useState("");
  const [noticeDetailModalOpem, setNoticeDetailModalOpen] = useState(false);
  const [selectedNoticeDetail, setSelectedNoticeDetail] = useState<NoticeProps | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [createNoticeModalOpen, setCreateNoticeModalOpen] = useState(false);
  const [includeInactive, setIncludeInactive] = useState(false);
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);
  const [invitationDetails, setInvitationDetails] = useState<any>(null);
  const [rejectConfirmationModalOpen, setRejectConfirmationModalOpen] = useState(false);
  const [removeMemberModalOpen, setRemoveMemberModalOpen] = useState(false);
  const [memberDetail, setMemberDetail] = useState<any>(null);

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

  const handleCreateNotice = (teamId: string) => {
    setPassTeamId(teamId);
    setCreateNoticeModalOpen(true);
  };

  if (!authUserDetails) {
    return <div>Loading...</div>;
  }
  const teamsData = authUserDetails.teams;

  const handleDeleteConfirmation = (data: any) => {
    setDeleteConfirmationModalOpen(true);
    setInvitationDetails(data);
  }

  const handleAcceptJoinRequest = async (id: string) => {

    await acceptTeamJoiningRequest(id);
    fetchPendingInvitations(teamsData[0].id);
  }

  const handleRejectConfirmation = (data: any) => {
    setRejectConfirmationModalOpen(true);
    setInvitationDetails(data);
  }
  
  // useEffect(() => {

  //   if (!deleteConfirmationModalOpen && !rejectConfirmationModalOpen) {
  //     fetchPendingInvitations(teamsData[0].id);
  //   }
  // }, [deleteConfirmationModalOpen, rejectConfirmationModalOpen]);

  const handleRemoveMember = async (member: any) => {
    console.log('RemoveMemberModal re-rendered');
    setMemberDetail(member);
    setRemoveMemberModalOpen(true);
  }
  const renderTabContent = () => {
    switch (activeTab) {
      case "noticeBoard":
        return (
          <Card className="flex gap-2 p-2 h-full">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                Notice Board
              </CardTitle>
            </CardHeader>
            <ScrollArea className="rounded-2xl max-h-[68vh] border">
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
                        <Plus className="text-background font-extrabold bg-muted-foreground rounded-full w-8"
                          onClick={() => handleCreateNotice(team.id)}
                        />
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
                                <p>
                                  Published on {dateFormat(notice.startDate)}
                                </p>
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
      case "membersWithDesignation":
        return (
          <Card className="flex gap-2 p-2 h-[79vh]">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                Members with Designations
              </CardTitle>
            </CardHeader>
            <Label className="pl-4 p-2">
              <Checkbox
                id="includeInactive"
                checked={includeInactive}
                onCheckedChange={(checked) => setIncludeInactive(!!checked)}
              />
              Include Inactive Roles
            </Label>
            <ScrollArea className="rounded-2xl max-h-[62vh] border">
                {teamsData[0]?.members?.map((member: any, index: number) => {
                  return (
                    <CardHeader key={member.userId}>
                      <Label className="flex text-xl text-primary">
                        {`(${index + 1})`} {member.firstName} {member.lastName}{" "}
                        {member.isTeamLeader === true && (
                          <Label className="border-2 rounded-full px-2 w-32 bg-muted py-1 h-6 m-1">
                            <Shield className="h-4 w-4" />
                            Team Leader
                          </Label>
                        )}
                        <Tooltip>
                          <TooltipTrigger>  
                            <Trash2
                              className="h-5 w-5 text-destructive"
                              onClick={() => handleRemoveMember(member)}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Remove Member or Role</p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <div className="flex gap-2 flex-col">
                        {member?.userRoleInTeam?.filter((role: any) => role.teamId === teamsData[0]?.id).map((role: any) =>
                          role.designation !== "TEAM_LEADER" &&
                          (includeInactive || role.isActive) ? (
                            <Label
                              key={role.id}
                              className={`font-primary text-base ml-8 ${
                                !role.isActive
                                  ? "line-through text-muted-foreground"
                                  : ""
                              }`}
                            >
                              {role.designation}
                            </Label>
                          ) : null
                        )}
                      </div>
                    </CardHeader>
                  );
                })}
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
                        {invitation?.member?.firstName}{" "}
                        {invitation?.member?.lastName}
                      </CardTitle>
                      {invitation?.isInvitation ? (
                        <Button className="w-min" variant={"destructive"} 
                          onClick={() => { handleDeleteConfirmation(invitation) }}
                        >
                          Cancel
                        </Button>
                      ) : (
                        <div>
                        <Button className="w-min" variant={"outline"}
                          onClick={() => { handleAcceptJoinRequest(invitation.id) }}
                          disabled={isLoading}
                        >
                          Accept
                        </Button>
                        <Button className="w-min" variant={"destructive"}
                          onClick={() => {handleRejectConfirmation(invitation) }}
                        >
                          Decline
                        </Button>
                        </div>
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
      case "timeline":
        if(isTimelineLoading) return <div>Loading...</div>;
        return (
          <ScrollArea className="flex max-h-[73vh]">
            <CardHeader className="dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r h-10 dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 rounded-full">
              <CardTitle className="flex w-full text-3xl justify-center bg-clip-text text-neutral-800 dark:text-neutral-50">
                Timeline
              </CardTitle>
            </CardHeader>
            {Object.keys(timelineDetails.timelineData).map((yearWise: any) => (
              <Collapsible
                key={yearWise}
              >
                <CollapsibleTrigger className="w-fit mt-4 px-6 bg-foreground text-xl text-background rounded-full mb-2">
                {yearWise}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {Object.keys(timelineDetails.timelineData[yearWise]).map((monthWise: any, {/* TODO: index: number */}) => (
                    <Collapsible
                      key={monthWise}
                    >
                      <CollapsibleTrigger className="w-28 bg-muted-foreground text-xl text-background rounded-full mb-2 ml-4">{monthWise}</CollapsibleTrigger>
                      <CollapsibleContent>
                        {Object.keys(timelineDetails.timelineData[yearWise][monthWise]).map((dayWise: any,{/* TODO: index: number */}) => (
                          <Collapsible
                            className="flex w-full p-2 pt-0"
                            key={dayWise}
                          >
                            <CollapsibleTrigger className="flex h-fit w-fill justify-end m-2 mb-0 mt-0 text-xl bg-secondary rounded-2xl lg:rounded-full px-3 pb-0.5 hover:font-bold hover:underline ">
                              {moment(`${monthWise} ${dayWise}, ${yearWise}`, 'MMMM DD, YYYY').format('YYYY MMMM Do')}
                            </CollapsibleTrigger>
                            <CollapsibleContent className="flex flex-col min-w-2/3 p-2 pt-0 rounded-2xl">
                              {Array.isArray(timelineDetails.timelineData[yearWise][monthWise][dayWise]) &&
                                timelineDetails.timelineData[yearWise][monthWise][dayWise].map((event: any) => (
                                  <Card
                                    className="border-none m-2 mt-0 w-full gap-2 p-2 pt-0 rounded-3xl text-muted-foreground"
                                    key={event.id}
                                  >
                                    <CardTitle className="font-normal rounded-xl lg:rounded-full">
                                      <span className="text-foreground">Member Name: </span>
                                      {event.user.firstName} {event.user.lastName}
                                    </CardTitle>
                                    <CardDescription className="font-normal rounded-xl lg:rounded-full ml-4">
                                      <span className="text-foreground">Designation: </span>
                                      {designationLabelConvert(event.designation)}
                                    </CardDescription>
                                    <CardDescription className="font-normal rounded-xl lg:rounded-full ml-4">
                                      <span className="text-foreground">Action: </span>
                                      {actionLabelConvert(event.action)}
                                    </CardDescription>
                                  </Card>
                                ))}
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </ScrollArea>
        );
    }
  };

  return (
    <Card className="flex w-full flex-row items-center gap-2 justify-center p-2 h-[88vh]">
      {/* <pre>{JSON.stringify(authUser, null, 2)}</pre> */}
      <Card className="flex w-2/3 gap-2 p-2 h-full rounded-b-lg">
        <CardHeader className="flex flex-wrap w-full">
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
              activeTab === "membersWithDesignation" ? "bg-muted-foreground text-secondary" : ""
            } w-min`}
            onClick={() => setActiveTab("membersWithDesignation")}
            variant="link"
          >
            <IdCard className="w-4 h-4" />
            Members Roles
          </Button>
          <Button
            className={`gap-2 ${
              activeTab === "invitationsAndJoinRequests" ? "bg-muted-foreground text-secondary" : ""
            } w-min`}
            onClick={() => {setActiveTab("invitationsAndJoinRequests");
                            fetchPendingInvitations(teamsData[0].id)}}
            variant="link"
          >
            <Mail className="w-4 h-4" />
            Invitations & Join Requests
          </Button>
          <Button
          className={`gap-2 ${
            activeTab === "timeline" ? "bg-muted-foreground text-secondary" : ""
          } w-min`}
          onClick={() => {setActiveTab("timeline");
                          fetchTimelineOfTeam(teamsData[0].id)}}
          variant="link"
          >
            <CalendarDays className="w-4 h-4" />
            Timeline
          </Button>
        </CardHeader>
        {renderTabContent()}
      </Card>
      <Card className="flex w-1/3 gap-2 p-2 border-0 pt-0 justify-between h-full ">
        <ChatComponent teamsData={authUserDetails.teams} userId={authUserDetails.userId} />
      </Card>
      {/* Modal */}

      <NoticeCreateModal
        id={passTeamId!}
        isOpen={createNoticeModalOpen}
        onClose={() => setCreateNoticeModalOpen(false)}
      />

      <NoticeDetailModal
        isOpen={noticeDetailModalOpem}
        onClose={() => setNoticeDetailModalOpen(false)}
        notice={selectedNoticeDetail ?? ({} as NoticeProps)}
      />

      <DeleteConfirmationModal
        isOpen={deleteConfirmationModalOpen}
        onClose={() => setDeleteConfirmationModalOpen(false)}
        data={invitationDetails}
      />

      <RejectConfirmationModal
        isOpen={rejectConfirmationModalOpen}
        onClose={() => setRejectConfirmationModalOpen(false)}
        data={invitationDetails}
      />

      <RemoveMemberModal
        isOpen={removeMemberModalOpen}
        onClose={() => setRemoveMemberModalOpen(false)}
        member={memberDetail}
        teamId={teamsData[0].id}
      />
    </Card>
  );
};

export default TeamLeaderHomePage;