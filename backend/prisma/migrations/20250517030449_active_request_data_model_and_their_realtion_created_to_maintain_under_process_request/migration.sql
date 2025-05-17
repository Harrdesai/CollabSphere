-- CreateTable
CREATE TABLE "ActiveInvitationOrRequest" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActiveInvitationOrRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActiveInvitationOrRequest" ADD CONSTRAINT "ActiveInvitationOrRequest_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveInvitationOrRequest" ADD CONSTRAINT "ActiveInvitationOrRequest_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
