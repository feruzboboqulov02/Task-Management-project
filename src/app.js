import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./utils/error.handler.js";
dotenv.config();
import cors from "cors";




const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
connectDB()
app.use(express.json());
import AuthRouter from "./routes/auth.route.js";
app.use("/api/auth", AuthRouter);
import TaskRouter from "./routes/task.route.js";
app.use("/api/tasks", TaskRouter);

app.use(errorHandler);

app.get('/', (req, res) => res.send('API is workinggg'))

export default app;