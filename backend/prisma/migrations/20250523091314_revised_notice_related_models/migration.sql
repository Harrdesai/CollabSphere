/*
  Warnings:

  - You are about to drop the column `isActive` on the `Notice` table. All the data in the column will be lost.
  - You are about to drop the column `postedById` on the `Notice` table. All the data in the column will be lost.
  - You are about to drop the column `action` on the `NoticeHistory` table. All the data in the column will be lost.
  - You are about to drop the column `performedById` on the `NoticeHistory` table. All the data in the column will be lost.
  - You are about to drop the `NoticeRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdById` to the `Notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `NoticeHistory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'DELETED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Action" ADD VALUE 'JOINING_REQUEST_RECEIVED';
ALTER TYPE "Action" ADD VALUE 'JOINING_REQUEST_REVOKED';
ALTER TYPE "Action" ADD VALUE 'JOINING_REQUEST_REJECTED';
ALTER TYPE "Action" ADD VALUE 'JOINING_REQUEST_ACCEPTED';

-- DropForeignKey
ALTER TABLE "Notice" DROP CONSTRAINT "Notice_postedById_fkey";

-- DropForeignKey
ALTER TABLE "NoticeHistory" DROP CONSTRAINT "NoticeHistory_performedById_fkey";

-- DropForeignKey
ALTER TABLE "NoticeRequest" DROP CONSTRAINT "NoticeRequest_memberId_fkey";

-- DropForeignKey
ALTER TABLE "NoticeRequest" DROP CONSTRAINT "NoticeRequest_teamId_fkey";

-- AlterTable
ALTER TABLE "Notice" DROP COLUMN "isActive",
DROP COLUMN "postedById",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL;

-- AlterTable
ALTER TABLE "NoticeHistory" DROP COLUMN "action",
DROP COLUMN "performedById",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "NoticeRequest";

-- AddForeignKey
ALTER TABLE "Notice" ADD CONSTRAINT "Notice_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoticeHistory" ADD CONSTRAINT "NoticeHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
