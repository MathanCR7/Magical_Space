-- CreateTable
CREATE TABLE "VisitLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "pageUrl" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "referrer" TEXT,
    "visitTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisitLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VisitLog_visitTime_idx" ON "VisitLog"("visitTime");
