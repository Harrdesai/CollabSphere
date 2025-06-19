-- CreateTable
CREATE TABLE "UserVisitingTrack" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserVisitingTrack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserVisitingTrack_userId_date_key" ON "UserVisitingTrack"("userId", "date");

-- AddForeignKey
ALTER TABLE "UserVisitingTrack" ADD CONSTRAINT "UserVisitingTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
