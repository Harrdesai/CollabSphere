// src/page/MembersList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDebounceCallback } from "usehooks-ts";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BadgeInfoIcon, Building2, GitCompareArrowsIcon, Shield } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import useMemberStore from "@/store/useMember.store";
import ExpandableText from "@/components/ExpandableText";
import { userActiveness } from "@/lib/helper";

const MembersList = () => {
  const { isLoading, members, fetchSearchedMembersList, setMembers, fetchUsedTags, tags } = useMemberStore();

  useEffect(() => {
    fetchUsedTags();
  }, [fetchUsedTags]);

  const [searchKeyWord, setSearchKeyWord] = useState("");
  const debounced = useDebounceCallback(setSearchKeyWord, 1000);

  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleTagChange = (id: string, checked: boolean) => {
    setSelectedTagIds((prev) =>
      checked ? [...prev, id] : prev.filter((tagId) => tagId !== id)
    );
  };

  useEffect(() => {
    const trimmedKeyword = searchKeyWord.trim();
    setMembers([]);
    if (trimmedKeyword !== "" || selectedTagIds.length > 0) {
      fetchSearchedMembersList(trimmedKeyword, selectedTagIds);
    }
  }, [searchKeyWord, selectedTagIds, fetchSearchedMembersList]);

  return (
    <Card className="flex w-full flex-row items-center gap-2 p-2">
      <Card className="flex w-2/3 gap-2 p-2">
        <CardHeader className="pl-0 gap-4">
          <Input
            placeholder="Search Members name"
            className="mt-0 justify-start"
            onChange={(event) => debounced(event.target.value)}
          />
          <div className="flex flex-wrap gap-2 w-full">
            {tags.map((tag: any) => (
              <Label
                key={tag.id}
                className="flex items-center h-6 bg-muted text-muted-foreground gap-2 border-2 rounded-full pl-2 pr-2 pb-0.5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTagIds.includes(tag.id)}
                  onChange={(event) =>
                    handleTagChange(tag.id, event.target.checked)
                  }
                  className="hidden peer"
                />

                {selectedTagIds.includes(tag.id) && (
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
                <span className="whitespace-nowrap">{tag.name}</span>
              </Label>
            ))}
          </div>
        </CardHeader>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          members.map((member: any) => (
            <Card
              key={member.userId}
              className="m-0 p-2 max-w-full gap-2 bg-muted cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => navigate(`/members/${member.userId}`)}
            >
              <CardHeader className="flex flex-row items-center gap-2 pl-0">
                <Avatar className="w-12 h-12 border-2">
                  <AvatarFallback className="text-xl bg-neutral-200 font-semibold dark:bg-neutral-700">
                    {member.firstName.charAt(0).toUpperCase() + member.lastName.charAt(0).toUpperCase()}
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
                    <TooltipTrigger className="flex">423</TooltipTrigger>
                    <TooltipContent>Masterji Points / ranking</TooltipContent>
                  </Tooltip>
                </Label>
              </CardFooter>
            </Card>
          ))
        )}
      </Card>
    </Card>
  );
};

export default MembersList;

// <Checkbox
//   id={tag.id}
//   checked={selectedTagIds.includes(tag.id)}
//   onCheckedChange={(checked) => {
//   handleTagChange( tag.id, Boolean(checked))
//   }}
// />
