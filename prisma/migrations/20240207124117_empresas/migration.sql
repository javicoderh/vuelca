/*
  Warnings:

  - Added the required column `ruta` to the `productossalud` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "productossalud_nombre_key";

-- DropIndex
DROP INDEX "saludempresas_nombreempresa_key";

-- AlterTable
ALTER TABLE "productossalud" ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "ruta" TEXT NOT NULL,
ALTER COLUMN "precio" SET DATA TYPE TEXT,
ADD CONSTRAINT "productossalud_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "saludempresas" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "saludempresas_pkey" PRIMARY KEY ("id");
