import cors from "cors";
import express from "express";
import { TodoController } from "./controller/todoController";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
const todoController = new TodoController();
app.get("/todos", todoController.getTodos);
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
