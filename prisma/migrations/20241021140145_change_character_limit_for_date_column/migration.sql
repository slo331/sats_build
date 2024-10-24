/*
  Warnings:

  - You are about to alter the column `date` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(8)`.

*/
-- AlterTable
ALTER TABLE `item` MODIFY `date` VARCHAR(8) NOT NULL;
