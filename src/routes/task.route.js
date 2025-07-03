import {Router} from  "express";
import TaskController from "../controllers/task.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware)

router.get('/tasks', TaskController.getTasks)
router.get('/tasks/:id', TaskController.getTaskById)
router.post('/tasks', TaskController.create)
router.put('/tasks/:id', TaskController.updateTask)
router.delete('/tasks/:id', TaskController.deleteTask)

export default router