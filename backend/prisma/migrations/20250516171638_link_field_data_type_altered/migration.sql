/*
  Warnings:

  - The `link` column on the `Teams` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "link",
ADD COLUMN     "link" JSONB;
