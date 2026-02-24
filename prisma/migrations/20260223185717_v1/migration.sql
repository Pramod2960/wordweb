-- CreateTable
CREATE TABLE "words" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pos" TEXT,
    "gloss" TEXT,
    "e_usage" TEXT,
    "sanskrit" TEXT,
    "s_usage" TEXT,
    "context" TEXT,
    "reference" TEXT,
    "transliteration" TEXT,
    "field_1" TEXT,
    "field_2" TEXT,
    "field_3" TEXT,
    "field_4" TEXT,
    "field_5" TEXT,

    CONSTRAINT "words_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
