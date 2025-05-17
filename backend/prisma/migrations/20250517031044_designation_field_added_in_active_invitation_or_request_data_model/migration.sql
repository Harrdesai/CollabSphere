/*
  Warnings:

  - Added the required column `designation` to the `ActiveInvitationOrRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActiveInvitationOrRequest" ADD COLUMN     "designation" "Designation" NOT NULL;
