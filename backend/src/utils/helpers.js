import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const canUserJoinAnotherTeam = async (userId) => {

  const isTeamLeader = await prisma.user.findUnique({
    where: {
      userId
    },
    select: {
      isTeamLeader: true
    }
  })

  if (isTeamLeader.isTeamLeader) {
    return false
  }

  const teamMemberships = await prisma.user.findMany({
    where: { userId },
    include:{
      teams: true
    }
  });

  return teamMemberships.length < 3;
}

const isAuthorized = async (userId, teamId) => {

  const getTeamLeaderId = await prisma.teams.findUnique({
    where: {
      id: teamId
    },
    select: {
      teamLeaderId: true
    }
  })

  if (getTeamLeaderId.teamLeaderId === userId) {
    return true
  }

  return false

}

const memberCount = async (teamId, memberId) => {

  let members = await prisma.userRoleInTeam.groupBy({
    by: ['userId'],
    where: {
      teamId,
      isActive: true,
    },
  });

  members = members.filter((member) => member.userId !== memberId);

  return members.length >= 4;
}

const isTeamMember = async (teamId, userId) => {

  if (typeof teamId === 'string') {
    teamId = [teamId]
  }
  
  const isMember = await prisma.teams.findMany({
    where: {
      id: {in: teamId },
      userRoleInTeam: {
        some: {
          userId,
          isActive: true
        }
      }
    }
  })

  if (isMember) {
    return true
  }

  return false
}

export { canUserJoinAnotherTeam, isAuthorized, memberCount, isTeamMember }