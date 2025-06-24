// src/page/Teams.tsx

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Shield } from "lucide-react";
import { Label } from "@/components/ui/label";
import useTeamStore from "@/store/useTeam.store";
import ExpandableText from "@/components/ExpandableText";
import TeamDetailModal from "@/components/Modals/Teams/teamsDetail";

const Teams = () => {
  const { fetchAllTeams, teams, isLoading, fetchTeamDetails } = useTeamStore();
  const [teamDetailModalOpen, setTeamDetailModalOpen] = useState(false);
  const [ teamId ] = useState<string>("");

  useEffect(() => {
    fetchAllTeams();
  }, []);

  const handleTeamDetail = async (teamId: string) => {
    fetchTeamDetails(teamId);
    setTeamDetailModalOpen(true);
  };

  if (isLoading ) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <Card className="flex w-full flex-row items-center gap-2 p-2">
      <Card className="flex w-full gap-2 p-2">
        <Input placeholder="Search Teams" className="m-2 mt-0 justify-start" />
        {/* {teams.length > 0 && */}
        {teams.map((team: any) => (
            <Card
              key={team.id}
              className="m-0 p-2 max-w-full gap-2 bg-muted cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={() => handleTeamDetail(team.id)}
            >
              <CardHeader className="flex flex-row items-center gap-2 pl-0">
                <CardTitle className="bg-transparent dark:bg-transparent">
                  {team.title}
                  {team.about?.length > 200 ? (
                    <ExpandableText text={team.about} />
                  ) : (
                    <CardDescription className="font-normal my-2">
                      {team.about}
                    </CardDescription>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label className="text-xl text-primary">Team Members :</Label>
                {team.members.map((member: any, index: number) => (
                  <Label className="text-base font-normal text-primary"
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
              </CardContent>
              {team.tags.length > 0 && (
              <CardFooter className="gap-4 pl-0 text-muted-foreground">
                {team.tags.map((tag: any) => (
                  <Label
                    className="border-2 rounded-full px-2 py-1 h-6 m-1"
                    key={tag.id}
                  >
                    {tag.name}
                  </Label>
                ))}
              </CardFooter>
              )}
            </Card>
          ))}
        <CardDescription className="w-2/3 pl-4 m-0">
          {JSON.stringify(teams, null, 2)}
        </CardDescription>
      </Card>
      {/* Modal */}
      <TeamDetailModal
        isOpen={teamDetailModalOpen}
        onClose={() => setTeamDetailModalOpen(false)}
        teamId={teamId}
      />
    </Card>
  );
};

export default Teams;