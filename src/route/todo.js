import express from "express";
import { TodoController } from "../controller/todoController";

export const todoRouter = express.Router();
const todoController = new TodoController();
todoRouter.get("/", todoController.getTodos);
todoRouter.post("/", todoController.createTodo);
todoRouter.delete("/:id", todoController.deleteTodo);
todoRouter.put("/:id", todoController.updateTodo);
