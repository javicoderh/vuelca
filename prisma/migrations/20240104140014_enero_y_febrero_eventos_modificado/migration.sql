/*
  Warnings:

  - You are about to drop the `eneroEventos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `febreroEventos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `marzoEventos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "eneroEventos";

-- DropTable
DROP TABLE "febreroEventos";

-- DropTable
DROP TABLE "marzoEventos";

-- CreateTable
CREATE TABLE "eneroeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "eneroeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "febreroeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "febreroeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marzoeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "marzoeventos_pkey" PRIMARY KEY ("id")
);
