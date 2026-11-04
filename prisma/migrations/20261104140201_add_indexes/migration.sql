-- CreateIndex
CREATE INDEX "ContractorExperience_contractorId_from_idx" ON "ContractorExperience"("contractorId", "from" DESC);

-- CreateIndex
CREATE INDEX "ContractorProject_contractorId_from_idx" ON "ContractorProject"("contractorId", "from" DESC);
