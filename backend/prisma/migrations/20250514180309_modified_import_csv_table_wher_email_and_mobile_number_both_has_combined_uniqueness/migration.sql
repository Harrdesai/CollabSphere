/*
  Warnings:

  - A unique constraint covering the columns `[email,mobileNumber]` on the table `ImportCSV` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ImportCSV_email_key";

-- DropIndex
DROP INDEX "ImportCSV_mobileNumber_key";

-- CreateIndex
CREATE UNIQUE INDEX "ImportCSV_email_mobileNumber_key" ON "ImportCSV"("email", "mobileNumber");
