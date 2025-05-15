/*
  Warnings:

  - A unique constraint covering the columns `[mobileNumber]` on the table `ImportCSV` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ImportCSV_mobileNumber_key" ON "ImportCSV"("mobileNumber");
