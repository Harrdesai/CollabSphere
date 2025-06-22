//src/page/MembersProfile.tsx

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { BadgeInfoIcon, Building2, GitCompareArrowsIcon, Shield } from "lucide-react";
import { userActiveness } from "@/lib/helper";
import { useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import moment from "moment";

import useMemberStore from "@/store/useMember.store";
import ExpandableText from "@/components/ExpandableText";

const MembersProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { memberProfile, isLoading, fetchMemberProfile } = useMemberStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchMemberProfile(id);
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="flex w-full flex-row rounded-3xl items-center gap-2 p-2 h-[88vh]">
      {memberProfile && (
        <Card className="flex w-full flex-col gap-2 p-0 h-full overflow-y-auto border-none shadow-none">
          <Card className="flex flex-col w-full gap-2 p-2">
            <CardTitle className="flex gap-2 pl-4 text-2xl text-muted-foreground">
              {memberProfile.firstName} {memberProfile.lastName}
              {memberProfile.isTeamLeader && (
                <Label className="border-2 rounded-full bg-muted px-2 py-1 h-6 m-1">
                  <Shield className="h-4 w-4" />
                  Team Leader
                </Label>
              )}
            </CardTitle>
            {memberProfile.about?.length > 200 ? (
              <ExpandableText text={memberProfile.about} />
            ) : (
              <CardDescription className="pl-4 text-muted-foreground">
                {`${(
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                )} ${memberProfile.about}`}
              </CardDescription>
            )}

            {/* Ohter details */}
            <Label className="text-xl">
              Email: <span className="font-normal">{memberProfile.email} </span>
            </Label>
            <Label className="text-xl">
              Git Commits: <span className="font-normal"> 0 </span>
            </Label>
            <Label className="text-xl flex items-center gap-1 flex-wrap sm:flex-nowrap">
              Activeness:{" "}
              <span className="font-normal">
                <span className="font-semibold">
                  {memberProfile._count?.userVisitingTrack}{" "}
                </span>{" "}
                Day(s) out of{" "}
                <span className="font-semibold">
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
            <Label className="text-xl">
              Part of:{" "}
              <span className="font-semibold">
                {memberProfile._count?.teams}{" "}
                <span className="font-normal"> Teams </span>
              </span>
            </Label>
            <Label className="text-xl">
              Masterji Score: <span className="font-semibold">544</span>
              <span className="font-normal"> Points </span>
            </Label>
          </Card>
          <CardTitle className="flex w-full gap-2 pl-4 text-2xl text-muted-foreground">
            Team Details
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2">
            {memberProfile.teams?.length > 0 &&
              memberProfile.teams.map((team: any) => {
                // const teamLeaderId = team.teamLeaderId;
                return (
                  <Card
                    key={team.createdAt}
                    className="flex flex-col w-full gap-2 p-2"
                  >
                    <Label className="text-xl">
                      Team Title:
                      <span className="font-normal text-wrap">
                        {team.title}
                      </span>
                    </Label>
                    <Label className="text-xl">
                      About the Team:
                      <span className="font-normal">{team.about}</span>
                    </Label>
                    <Label className="text-xl">
                      Established on:
                      <span className="font-normal">{moment(team.createdAt).format("MMM DD, YYYY")}</span>
                    </Label>
                    <Label className="text-xl font-semibold">
                      Members of the team:
                    </Label>
                    {team.members.length > 0 &&
                      team.members.map((member: any) => (
                        
            <Card
              key={member.userId}
              className="m-0 p-2 max-w-full gap-2 hover:shadow-2xl hover:bg-stone-100"
              onClick={() => navigate(`/members/${member.userId}`)}
            >
              <CardHeader className="flex flex-row items-center gap-2 pl-0">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="text-xl">
                    {member.firstName.charAt(0).toUpperCase() + member.lastName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>
                  <div className="flex gap-2 text-xl text-muted-foreground">
                  {member.firstName} {member.lastName}
                  {member.isTeamLeader && (
                <Label className="border-2 rounded-full px-2 w-32 bg-muted py-1 md:h-6 m-1">
                  <Shield className="h-4 w-4" />
                  Team Leader
                </Label>
              )}
              </div>
                  {member.about?.length > 200 ? (
                    <ExpandableText text={member.about}/>
                  ) : (
                    <CardDescription className="font-normal my-2">{member.about}</CardDescription>
                  )
                  }
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
                        {member._count?.userVisitingTrack}{" "}
                      </span>{" "}
                      Day(s) active on the plateform outof <br />
                      <span className="font-bold">
                        {
                          userActiveness(
                            member.createdAt,
                            member._count?.userVisitingTrack
                          ).noOfDaysUserOld
                        }{" "}
                      </span>{" "}
                      Days from joined
                    </HoverCardContent>
                  </HoverCard>
                  <Tooltip>
                    <TooltipTrigger>
                      {member._count?.userVisitingTrack} /{" "}
                      {
                        userActiveness(
                          member.createdAt,
                          member._count?.userVisitingTrack
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
                      {member._count?.teams}
                    </TooltipTrigger>
                    <TooltipContent>Teams Joined</TooltipContent>
                  </Tooltip>
                </Label>
                <Label className="border-2 rounded-full px-2 bg-muted py-1">
                  <Tooltip>
                    <TooltipTrigger className="flex">423</TooltipTrigger>
                    <TooltipContent>Masterji Points / ranking</TooltipContent>
                  </Tooltip>
                </Label>
              </CardFooter>
            </Card>
                      ))}
                  </Card>
                );
              })}
          </Card>
          <CardTitle className="flex w-full gap-2 pl-4 text-2xl text-muted-foreground">
            Team Contributions
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2">
            <p>team</p>
            <p>team</p>
            <p>team</p>
            <p>team</p>
          </Card>
          <CardTitle className="flex w-full gap-2 pl-4 text-2xl text-muted-foreground">
            Git Commit Contributions
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2">
            <p>git</p>
            <p>git</p>
            <p>git</p>
            <p>git</p>
          </Card>
          <CardTitle className="flex w-full gap-2 pl-4 text-2xl text-muted-foreground">
            Masterji Contributions
          </CardTitle>
          <Card className="flex flex-col w-full gap-2 p-2">
            <p>masterji</p>
            <p>masterji</p>
            <p>masterji</p>
            <p>masterji</p>
          </Card>
        </Card>
      )}
    </Card>
  );
};

export default MembersProfile;
