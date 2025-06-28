import taskService from '../services/taskServices.js';

async function getAllTasks(req, res) {
    const task = await taskService.getAllTasks();
    res.json(task);
}

async function saveTask(req, res) {
    const body = req.body;
    const taskCreated = await taskService.saveTask(body);
    res.json(taskCreated);
}

async function deleteTask(req, res) {
    const id = req.params.id;
    const taskDeleted = await taskService.deleteTask(id);
    res.json(taskDeleted);
}

async function toggleCompleted(req, res) {
    const id = req.params.id;
    const body = req.body;

    const toogleTaskCompleted = await taskService.toggleCompleted(body, id);
    res.json(toogleTaskCompleted);
}

export default {
    getAllTasks,
    saveTask,
    deleteTask,
    toggleCompleted
}