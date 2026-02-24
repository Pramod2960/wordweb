/*
  Warnings:

  - The primary key for the `words` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `words` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The required column `uuid` was added to the `words` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "words" DROP CONSTRAINT "words_pkey",
ADD COLUMN     "uuid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "words_pkey" PRIMARY KEY ("id");
