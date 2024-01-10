-- CreateTable
CREATE TABLE "permacultura" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "route" TEXT NOT NULL,

    CONSTRAINT "permacultura_pkey" PRIMARY KEY ("id")
);

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
    "mes" TEXT NOT NULL,

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
    "mes" TEXT NOT NULL,

    CONSTRAINT "febreroeventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marzoeventos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "ruta" TEXT NOT NULL,
    "imagen1" TEXT,
    "eslogan" TEXT NOT NULL,
    "mes" TEXT NOT NULL,

    CONSTRAINT "marzoeventos_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "meses" (
    "nombre" TEXT NOT NULL,
    "dias" INTEGER NOT NULL,
    "ruta" TEXT
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "roleId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meses_nombre_key" ON "meses"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_name_key" ON "UserRole"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "UserRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
