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

  const teamMemberships = await prisma.userRoleInTeam.findMany({
    where: { userId },
    select: { teamId: true },
    distinct: ['teamId']
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

const memberCount = async (teamId) => {

  const members = await prisma.userRoleInTeam.groupBy({
    by: ['userId'],
    where: {
      teamId,
      isActive: true,
    },
  });

  return members.length >= 4;
}

const isTeamMember = async (teamId, userId) => {

  const isMember = await prisma.userRoleInTeam.findFirst({
    where: {
      teamId: teamId,
      userId: userId,
      isActive: true
    }
  })

  if (isMember) {
    return true
  }

  return false
}

export { canUserJoinAnotherTeam, isAuthorized, memberCount, isTeamMember }