import {Router} from  "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware)

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router