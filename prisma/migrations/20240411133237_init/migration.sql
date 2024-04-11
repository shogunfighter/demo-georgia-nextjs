/*
  Warnings:

  - A unique constraint covering the columns `[serial_numbers]` on the table `machine` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "machine_serial_numbers_key" ON "machine"("serial_numbers");
