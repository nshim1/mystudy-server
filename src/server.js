import express from "express";
import { TodoController } from "./controller/todoController";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/todos", TodoController.getTodos());
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
