// src/page/Teams.tsx

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import useTeamStore from "@/store/useTeam.store";
import { Loader2Icon } from "lucide-react";

import { useEffect } from "react";

const Teams = () => {

  const { fetchAllTeams, teams, isLoading } = useTeamStore();

  useEffect(() => {
    fetchAllTeams();
  }, []);

  if(isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2Icon className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <Card className="w-full gap-2">
      <Input placeholder="Search Teams" className="m-2 mt-0 max-w-2/3 justify-start" />
      {/* {teams.length > 0 && */}
      {teams.map((team: any) => (
        <Card key={team.id}>
          <CardHeader>
            <CardTitle>{team.title}</CardTitle>
          </CardHeader>
          <>
          about: {team.about} <br />
          Team Leader: {team.teamLeader.firstName} {team.teamLeader.lastName} <br />
          Members: {team.members.map((member: any) => (
            <div key={member.userId}>
              {member.firstName} {member.lastName} <br />
            </div>
          ))}
          </>
        </Card>
      ))}
      <CardDescription className="w-2/3 pl-4 m-0">{JSON.stringify(teams, null, 2)}</CardDescription>
    </Card>
  )
}

export default Teams