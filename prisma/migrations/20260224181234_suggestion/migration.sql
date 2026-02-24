-- AlterTable
ALTER TABLE "words" ADD COLUMN     "suggestion" TEXT[] DEFAULT ARRAY[]::TEXT[];
