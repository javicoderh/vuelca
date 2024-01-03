-- CreateTable
CREATE TABLE "meses" (
    "nombre" TEXT NOT NULL,
    "dias" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "meses_nombre_key" ON "meses"("nombre");
