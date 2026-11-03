/*
  Warnings:

  - The primary key for the `Contractor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ContractorExperience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ContractorProject` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ContractorExperience" DROP CONSTRAINT "ContractorExperience_contractorId_fkey";

-- DropForeignKey
ALTER TABLE "ContractorProject" DROP CONSTRAINT "ContractorProject_contractorId_fkey";

-- AlterTable
ALTER TABLE "Contractor" DROP CONSTRAINT "Contractor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Contractor_id_seq";

-- AlterTable
ALTER TABLE "ContractorExperience" DROP CONSTRAINT "ContractorExperience_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "contractorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContractorExperience_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContractorExperience_id_seq";

-- AlterTable
ALTER TABLE "ContractorProject" DROP CONSTRAINT "ContractorProject_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "contractorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ContractorProject_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContractorProject_id_seq";

-- AddForeignKey
ALTER TABLE "ContractorExperience" ADD CONSTRAINT "ContractorExperience_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractorProject" ADD CONSTRAINT "ContractorProject_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
