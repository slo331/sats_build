-- AlterTable
ALTER TABLE `item` ADD COLUMN `issues` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN';
