/*
  Warnings:

  - A unique constraint covering the columns `[teamId,memberId,designation]` on the table `ActiveInvitationOrRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ActiveInvitationOrRequest_teamId_memberId_designation_key" ON "ActiveInvitationOrRequest"("teamId", "memberId", "designation");
