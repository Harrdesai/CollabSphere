/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTeamRoleHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TeamRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserRoles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `designation` to the `Teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `TeamsEditLog` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `action` on the `TeamsEditLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('FULLSTACK_DEVELOPER', 'FRONTEND_DEVELOPER', 'BACKEND_DEVELOPER', 'UI_DESIGNER', 'UX_DESIGNER', 'PRODUCT_DESIGNER', 'DATA_SCIENTIST', 'DATA_ANALYST', 'DATA_ENGINEER', 'DATABASE_DESIGNER');

-- CreateEnum
CREATE TYPE "Action" AS ENUM ('INVITATION_SENT', 'INVITATION_REVOKED', 'INVITATION_EXPIRED', 'INVITATION_REJECTED', 'INVITATION_ACCEPTED', 'ROLE_ASIGNED', 'ROLE_REMOVED', 'TEAM_CREATED', 'TEAM_DELETED');

-- DropForeignKey
ALTER TABLE "UserTeamRoleHistory" DROP CONSTRAINT "UserTeamRoleHistory_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeamRoleHistory" DROP CONSTRAINT "UserTeamRoleHistory_teamId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeamRoleHistory" DROP CONSTRAINT "UserTeamRoleHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "_TeamRoles" DROP CONSTRAINT "_TeamRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeamRoles" DROP CONSTRAINT "_TeamRoles_B_fkey";

-- DropForeignKey
ALTER TABLE "_UserRoles" DROP CONSTRAINT "_UserRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserRoles" DROP CONSTRAINT "_UserRoles_B_fkey";

-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "designation" "Designation" NOT NULL;

-- AlterTable
ALTER TABLE "TeamsEditLog" ADD COLUMN     "designation" "Designation" NOT NULL,
DROP COLUMN "action",
ADD COLUMN     "action" "Action" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "designation" "Designation";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "UserTeamRoleHistory";

-- DropTable
DROP TABLE "_TeamRoles";

-- DropTable
DROP TABLE "_UserRoles";

-- CreateTable
CREATE TABLE "UserRoleInTeam" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "designation" "Designation" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRoleInTeam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserRoleInTeam" ADD CONSTRAINT "UserRoleInTeam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRoleInTeam" ADD CONSTRAINT "UserRoleInTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
