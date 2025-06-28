import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/', taskController.getAllTasks).post('/', taskController.saveTask).delete('/:id', taskController.deleteTask).put('/:id', taskController.toggleCompleted);

export default router;