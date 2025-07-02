// src/utils/groupAndSortMembersByUser.ts

export interface RawMember {
  id: string;
  userId: string;
  teamId: string;
  designation: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  user: {
    firstName: string;
    lastName: string;
  };
}

export interface GroupedMember {
  userId: string;
  teamId: string;
  user: {
    firstName: string;
    lastName: string;
  };
  designations: string[];
  isActive: boolean;
  isTeamLeader: boolean;
}

function groupAndSortMembersByUser(members: RawMember[]): GroupedMember[] {
  console.log(`members`, members);
  const groupedMap = new Map<string, RawMember[]>();

  // Group by userId
  for (const member of members) {
    if (!groupedMap.has(member.userId)) {
      groupedMap.set(member.userId, []);
    }
    groupedMap.get(member.userId)!.push(member);
  }

  // Merge roles and determine active status / team leader
  const grouped = Array.from(groupedMap.values()).map((group) => {
    const base = group[0];

    const designations = group.map((m) => m.designation);
    const isActive = group.some((m) => m.isActive);
    const isTeamLeader = designations.includes("TEAM_LEADER");

    return {
      userId: base.userId,
      teamId: base.teamId,
      user: base.user,
      designations,
      isActive,
      isTeamLeader,
    };
  });

  // Sort: TEAM_LEADER first, then active, then inactive
  grouped.sort((a, b) => {
    if (a.isTeamLeader && !b.isTeamLeader) return -1;
    if (!a.isTeamLeader && b.isTeamLeader) return 1;

    if (a.isActive && !b.isActive) return -1;
    if (!a.isActive && b.isActive) return 1;

    return 0;
  });

  return grouped;
}

export default groupAndSortMembersByUser;