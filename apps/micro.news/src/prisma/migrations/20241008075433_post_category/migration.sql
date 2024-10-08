/*
  Warnings:

  - Added the required column `category` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_posts" ("content", "id", "image", "publishedAt", "slug", "status", "title", "updatedAt") SELECT "content", "id", "image", "publishedAt", "slug", "status", "title", "updatedAt" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
