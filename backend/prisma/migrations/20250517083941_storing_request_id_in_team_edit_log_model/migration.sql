-- AlterTable
ALTER TABLE "TeamsEditLog" ADD COLUMN     "requestId" TEXT;

-- AddForeignKey
ALTER TABLE "TeamsEditLog" ADD CONSTRAINT "TeamsEditLog_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "ActiveInvitationOrRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
