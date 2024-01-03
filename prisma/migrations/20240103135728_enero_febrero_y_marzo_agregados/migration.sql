-- CreateTable
CREATE TABLE "eneroEventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "eneroEventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "febreroEventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "febreroEventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marzoEventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,

    CONSTRAINT "marzoEventos_pkey" PRIMARY KEY ("id")
);
