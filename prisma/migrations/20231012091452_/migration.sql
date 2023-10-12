-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayImages" JSONB NOT NULL,
    "websiteUrl" TEXT NOT NULL,
    "frontendUrl" TEXT NOT NULL,
    "backendUrl" TEXT,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "screenshots" JSONB[],

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
