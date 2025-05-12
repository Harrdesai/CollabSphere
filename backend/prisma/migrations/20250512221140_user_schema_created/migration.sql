-- CreateTable
CREATE TABLE "ImportCSV" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "courseName" TEXT[],

    CONSTRAINT "ImportCSV_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "courseName" TEXT[],
    "about" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "twitter" TEXT,
    "github" TEXT,
    "linkedIn" TEXT,
    "hashnode" TEXT,
    "peerlist" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImportCSV_email_key" ON "ImportCSV"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
