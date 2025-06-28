-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "task_desc" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
