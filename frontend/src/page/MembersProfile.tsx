//src/page/MembersProfile.tsx

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { BadgeInfoIcon, Building2, GitCompareArrowsIcon, PlusCircle, Shield } from "lucide-react";
import { userActiveness } from "@/lib/helper";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { ScrollArea } from "@/components/ui/scroll-area";
import GitHubCalendar from 'react-github-calendar';

import useMemberStore from "@/store/useMember.store";
import { useAuthStore } from "@/store/useAuthStore";
import ExpandableText from "@/components/ExpandableText";
import SendInvitationModal from "@/components/Modals/sendInvitationModal";
import { useTheme } from "@/components/theme-provider";
import ContributionCalender from "@/components/HeatmapCalendar";

const MembersProfile = () => {
  const navigate = useNavigate();
  
  const { id } = useParams<{ id: string }>();
  
  const { memberProfile, isLoading, fetchMemberProfile } = useMemberStore();
  const [isSendInvitationModalOpen, setIsSendInvitationModalOpen] = useState(false);
  const [showInviteButton, setShowInviteButton] = useState(true);
  const { onlineUsers } = useAuthStore();

  const handleModalOpen = () => {
    setIsSendInvitationModalOpen(true);
  };

  useEffect(() => {
    if (id) {
      fetchMemberProfile(id);
    }
  }, [id]);

  useEffect(() => {
    if (memberProfile) {
      const shouldHideInviteButton =
        memberProfile._count?.teams > 2 || memberProfile.isTeamLeader;
      setShowInviteButton(!shouldHideInviteButton);
    }
  }, [memberProfile]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(`memberProfile---------------${onlineUsers}`, memberProfile);
  return (
    <Card className="flex w-full flex-row rounded-3xl items-center gap-2 p-2 h-[88vh]">
      {memberProfile && (
        <ScrollArea className="flex w-full flex-col h-full border-none shadow-none">
          <Card className="flex flex-col w-full gap-2 p-2 bg-stone-50 dark:bg-transparent">
            <CardHeader className="flex w-full p-0">
            <CardTitle className="flex gap-2 pl-4 pb-0 pr-1 text-2xl text-primary">
              {memberProfile.firstName} {memberProfile.lastName}
              {memberProfile.isTeamLeader && (
                <Label className="border-2 rounded-full bg-muted px-2 py-1 h-6 m-1">
                  <Shield className="h-4 w-4" />
                  Team Leader
                </Label>
              )}
            </CardTitle>
              {onlineUsers.includes(memberProfile.userId) && (
                <Label className="border-2 rounded-full text-foreground bg-green-500/40 px-2 py-1 h-6 m-1">
                  Online
                </Label>
              )}
            {showInviteButton && (
              <Button className="py-4 items-center" onClick={handleModalOpen}>
                <PlusCircle />
                Invite to Join Team
              </Button>
            )}
            </CardHeader>
            {memberProfile.about?.length > 200 ? (
              <ExpandableText text={memberProfile.about} />
            ) : (
              <CardDescription className="pl-4 text-muted-foreground">
                {`${memberProfile.about}`}
              </CardDescription>
            )}

            {/* Ohter details */}
            <Label className="text-xl font-normal text-primary mt-2">
              Email:{" "}
              <span className="font-light text-primary">
                {memberProfile.email}{" "}
              </span>
            </Label>
            <Label className="text-xl font-normal text-primary">
              Git Commits: <span className="font-light text-primary"> 0 </span>
            </Label>
            <Label className="text-xl flex items-center gap-1 flex-wrap sm:flex-nowrap font-normal text-primary">
              Activeness:{" "}
              <span className="font-light text-primary">
                <span className="font-normal">
                  {memberProfile._count?.userVisitingTrack}{" "}
                </span>{" "}
                Day(s) out of{" "}
                <span className="font-normal">
                  {
                    userActiveness(
                      memberProfile.createdAt,
                      memberProfile._count?.userVisitingTrack
                    ).noOfDaysUserOld
                  }{" "}
                </span>{" "}
                Days from joined{" "}
              </span>
            </Label>
            <Label className="text-xl font-normal text-primary">
              Part of:{" "}
              <span className="font-normal">
                {memberProfile._count?.teams}{" "}
                <span className="font-light text-primary"> Teams </span>
              </span>
            </Label>
            <Label className="text-xl font-normal text-primary">
              Masterji Score: <span className="font-normal">544</span>
              <span className="font-light text-primary"> Points </span>
            </Label>
          </Card>
          <CardTitle className="flex w-fit gap-2 mt-2 mb-2 pl-4 text-2xl font-normal text-foreground bg-stone-200">
            Team Details
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2">
            {memberProfile.teams?.length > 0 &&
              memberProfile.teams.map((team: any) => {
                // const teamLeaderId = team.teamLeaderId;
                return (
                  <Card
                    key={team.createdAt}
                    className="flex flex-col w-full gap-2 p-2 bg-stone-50 dark:bg-transparent border-3 border-dashed"
                  >
                    <Label className="text-xl font-normal text-primary">
                      Team Title:
                      <span className="font-light text-wrap">{team.title}</span>
                    </Label>
                    <Label className="text-xl font-normal text-primary">
                      About the Team:
                      <span className="font-light">{team.about}</span>
                    </Label>
                    <Label className="text-xl font-normal text-primary">
                      Established on:
                      <span className="font-light">
                        {moment(team.createdAt).format("MMM DD, YYYY")}
                      </span>
                    </Label>
                    <Label className="text-xl font-normal text-primary">
                      Members of the team:
                    </Label>
                    {team.members.length > 0 &&
                      team.members.map((member: any) => (
                        <Card
                          key={member.userId}
                          className="m-0 p-2 max-w-full gap-2 bg-muted cursor-pointer hover:scale-98 transition-all duration-300 ease-in-out"
                          onClick={() => navigate(`/members/${member.userId}`)}
                        >
                          <CardHeader className="flex flex-row items-center gap-2 pl-0">
                            <Avatar className="w-12 h-12 border-2">
                              <AvatarFallback className="text-xl bg-neutral-200 font-semibold dark:bg-neutral-700">
                                {member.firstName.charAt(0).toUpperCase() +
                                  member.lastName.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <CardTitle className="bg-transparent dark:bg-transparent">
                              <div className="flex gap-2 text-xl">
                                {member.firstName} {member.lastName}
                                {member.isTeamLeader && (
                                  <Label className="border-2 rounded-full px-2 w-32 bg-muted py-1 h-6 m-1">
                                    <Shield className="h-4 w-4" />
                                    Team Leader
                                  </Label>
                                )}
                              </div>
                              {member.about?.length > 200 ? (
                                <ExpandableText text={member.about} />
                              ) : (
                                <CardDescription className="font-normal my-2">
                                  {member.about}
                                </CardDescription>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardFooter className="gap-4 pl-0 text-muted-foreground">
                            <Label className="border-2 rounded-full px-2 bg-muted py-1">
                              <HoverCard>
                                <HoverCardTrigger>
                                  <BadgeInfoIcon className="size-4 mr-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                  <span className="font-bold">
                                    {member._count.userVisitingTrack}{" "}
                                  </span>{" "}
                                  Day(s) active on the plateform outof <br />
                                  <span className="font-bold">
                                    {
                                      userActiveness(
                                        member.createdAt,
                                        member._count.userVisitingTrack
                                      ).noOfDaysUserOld
                                    }{" "}
                                  </span>{" "}
                                  Days from joined
                                </HoverCardContent>
                              </HoverCard>
                              <Tooltip>
                                <TooltipTrigger>
                                  {member._count.userVisitingTrack} /{" "}
                                  {
                                    userActiveness(
                                      member.createdAt,
                                      member._count.userVisitingTrack
                                    ).noOfDaysUserOld
                                  }
                                </TooltipTrigger>
                                <TooltipContent>
                                  User Activeness on Platefrom
                                </TooltipContent>
                              </Tooltip>
                            </Label>
                            <Label className="border-2 rounded-full px-2 bg-muted py-1">
                              <Tooltip>
                                <TooltipTrigger className="flex">
                                  <GitCompareArrowsIcon className="size-4 mr-2" />
                                  56
                                </TooltipTrigger>
                                <TooltipContent>Git comit</TooltipContent>
                              </Tooltip>
                            </Label>
                            <Label className="border-2 rounded-full px-2 bg-muted py-1">
                              <Tooltip>
                                <TooltipTrigger className="flex">
                                  <Building2 className="size-4 mr-2" />
                                  {member._count.teams}
                                </TooltipTrigger>
                                <TooltipContent>Teams Joined</TooltipContent>
                              </Tooltip>
                            </Label>
                            <Label className="border-2 rounded-full px-2 bg-muted py-1">
                              <Tooltip>
                                <TooltipTrigger className="flex">
                                  423
                                </TooltipTrigger>
                                <TooltipContent>
                                  Masterji Points / ranking
                                </TooltipContent>
                              </Tooltip>
                            </Label>
                          </CardFooter>
                        </Card>
                      ))}
                  </Card>
                );
              })}
          </Card>
          <CardTitle className="flex w-fit gap-2 mt-2 mb-2 pl-4 text-2xl font-normal text-foreground bg-stone-200">
            Activeness
          </CardTitle>
          <Card className="flex flex-col w-full p-0 bg-stone-50 dark:bg-transparent">
            <ContributionCalender 
            data={memberProfile.userVisitingTrack}
            noOfDaysUserVisited = {memberProfile._count?.userVisitingTrack}
            longestStreak = {memberProfile.longestStreak}
            />
          </Card>
          <CardTitle className="flex w-fit gap-2 mt-2 mb-2 pl-4 text-2xl font-normal text-foreground bg-stone-200">
            Git Commit Contributions
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2 bg-stone-50 dark:bg-transparent pt-4">
            { (memberProfile.github) ? (
            <GitHubCalendar
              username={memberProfile.github}
              colorScheme={useTheme().theme === "dark" ? "dark" : "light"}
              showWeekdayLabels={true}
              hideMonthLabels={true}
            />
            ): (
              <p className="text-2xl">No GitHub Account Linked</p>
            )}
          </Card>
          <CardTitle className="flex w-fit gap-2 mt-2 mb-2 pl-4 text-2xl font-normal text-foreground bg-stone-200">
            Masterji Contributions
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2 bg-stone-50 dark:bg-transparent">
            <p>masterji</p>
            <p>masterji</p>
            <p>masterji</p>
            <p>masterji</p>
          </Card>
        </ScrollArea>
      )}

      <SendInvitationModal
        isOpen={isSendInvitationModalOpen}
        onClose={() => setIsSendInvitationModalOpen(false)}
        userId={id!}
        memberName={`${memberProfile.firstName} ${memberProfile.lastName}`}
      />
    </Card>
  );
};

export default MembersProfile;
