/*
  Warnings:

  - You are about to drop the column `noticeBoard` on the `Teams` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uniqueTitle]` on the table `Teams` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uniqueTitle` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "noticeBoard",
ADD COLUMN     "uniqueTitle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Teams_uniqueTitle_key" ON "Teams"("uniqueTitle");
