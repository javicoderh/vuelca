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
