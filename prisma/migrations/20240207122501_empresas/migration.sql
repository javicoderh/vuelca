/*
  Warnings:

  - Made the column `nombre` on table `abrileventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `agostoeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `diciembreeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `eneroeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `febreroeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `julioeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `junioeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `mayoeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `noviembreeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `octubreeventos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `septiembreeventos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "abrileventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "agostoeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "diciembreeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "eneroeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "febreroeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "julioeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "junioeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "mayoeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "noviembreeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "octubreeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "septiembreeventos" ALTER COLUMN "nombre" SET NOT NULL;

-- CreateTable
CREATE TABLE "saludempresas" (
    "nombreempresa" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "imagen1" TEXT NOT NULL,
    "imagen2" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "clickscount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "productossalud" (
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "clickscount" INTEGER NOT NULL,
    "imagen" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "saludempresas_nombreempresa_key" ON "saludempresas"("nombreempresa");

-- CreateIndex
CREATE UNIQUE INDEX "productossalud_nombre_key" ON "productossalud"("nombre");
