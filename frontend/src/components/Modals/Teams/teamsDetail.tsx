// // src/components/Modals/Notice/noticeDetail.tsx

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../ui/button";
import { Label } from "@/components/ui/label";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BadgeInfoIcon, Building2, GitCompareArrows, Shield } from "lucide-react";
import ExpandableText from "@/components/ExpandableText";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { userActiveness } from "@/lib/helper";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import useTeamStore from "@/store/useTeam.store";
import { useEffect } from "react";

export interface TeamDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
}

const TeamDetailModal = ({
  isOpen,
  onClose,
  teamId,
}: TeamDetailModalProps) => {
  
  const { isLoading, teamDetail, fetchTeamDetails } = useTeamStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      teamDetail === null && fetchTeamDetails(teamId);
    }
  }, [isOpen, teamId]);

  console.log(`reaponse Detail ------ ${JSON.stringify(teamDetail)}`)
  if(isLoading) return <div>Loading...</div>

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="flex flex-col gap-4 w-full lg:min-w-2/3 lg:max-2/3 min-w-full rounded-3xl">
        <DialogTitle className="text-neutral-800 dark:text-neutral-50 dark:bg-gradient-to-r from-stone-100 via-stone-200 to-stone-400 bg-gradient-to-r dark:from-stone-900 dark:via-stone-800 dark:to-stone-700 p-1 px-4 w-fit rounded-full">
          {teamDetail.title}
        </DialogTitle>
        <DialogDescription className="pl-8">
          {teamDetail.about}
        </DialogDescription>
        <CardContent className="flex flex-col w-full gap-2 p-2 bg-stone-50 dark:bg-transparent border-2 rounded-3xl">
          <Label className="text-xl font-normal text-primary">
            Established on:
            <span className="font-light">
              {moment(teamDetail.createdAt).format("MMM DD, YYYY")}
            </span>
          </Label>
          <Label className="text-xl font-normal text-primary">
            Members of the team:
          </Label>
          {teamDetail.members?.length > 0 &&
            teamDetail.members.map((member: any) => (
            <Card
              key={member.userId}
              className="m-0 p-2 max-w-full gap-2 bg-muted cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
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
                      <GitCompareArrows className="size-4 mr-2" />
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
                    <TooltipTrigger className="flex">423</TooltipTrigger>
                    <TooltipContent>
                      Masterji Points / ranking
                    </TooltipContent>
                  </Tooltip>
                </Label>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
        <DialogFooter className="flex flex-col gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDetailModal;