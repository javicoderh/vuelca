/*
  Warnings:

  - Added the required column `mes` to the `eneroeventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `febreroeventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `marzoeventos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "eneroeventos" ADD COLUMN     "mes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "febreroeventos" ADD COLUMN     "mes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "marzoeventos" ADD COLUMN     "mes" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "abrileventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "abrileventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mayoeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "mayoeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "junioeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "junioeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "julioeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "julioeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agostoeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "agostoeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "septiembreeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "septiembreeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "octubreeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "octubreeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "noviembreeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "noviembreeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diciembreeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "diciembreeventos_pkey" PRIMARY KEY ("id")
);
