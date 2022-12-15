-- CreateTable
CREATE TABLE "_UpvotedFeatures" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UpvotedFeatures_AB_unique" ON "_UpvotedFeatures"("A", "B");

-- CreateIndex
CREATE INDEX "_UpvotedFeatures_B_index" ON "_UpvotedFeatures"("B");

-- AddForeignKey
ALTER TABLE "_UpvotedFeatures" ADD CONSTRAINT "_UpvotedFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "RoadmapFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UpvotedFeatures" ADD CONSTRAINT "_UpvotedFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
