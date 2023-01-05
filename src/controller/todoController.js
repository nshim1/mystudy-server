import { TodoService } from "../service/todoService";

export class TodoController {
  constructor() {
    this.todoService = new TodoService();
    this.getTodos = this.getTodos.bind(this); //&******
  }
  getTodos(req, res) {
    const todos = this.todoService.getTodos();
    res.json({
      todos,
    });
  }
}
