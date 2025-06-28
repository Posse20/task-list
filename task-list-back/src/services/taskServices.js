import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllTasks() {
    const query = await prisma.task.findMany();
    return query;
}

async function saveTask(body) {
    const query = await prisma.task.create({
        data:  body
    });
    return query;
}

async function deleteTask(id) {
    const query = await prisma.task.delete({
        where: {
            id: parseInt(id)
        }
    });
    return query;
}

async function toggleCompleted(body, id) {
    const query = await prisma.task.update({
        where: {
            id: parseInt(id)
        },
        data: body
    });
    return query;
}

export default {
    getAllTasks,
    saveTask,
    deleteTask,
    toggleCompleted
}