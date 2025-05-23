/*
  Warnings:

  - A unique constraint covering the columns `[teamId,title,startDate,endDate]` on the table `Notice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Notice_teamId_title_startDate_endDate_key" ON "Notice"("teamId", "title", "startDate", "endDate");
