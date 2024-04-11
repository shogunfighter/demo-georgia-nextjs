-- CreateTable
CREATE TABLE "batch" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "licenseLevel" INTEGER NOT NULL DEFAULT -1,
    "quantity" INTEGER NOT NULL DEFAULT -1,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine" (
    "id" SERIAL NOT NULL,
    "serial_numbers" INTEGER NOT NULL,

    CONSTRAINT "machine_pkey" PRIMARY KEY ("id")
);
