import { TodoService } from "../service/todoService";

export class TodoController {
  constructor() {
    this.todoService = new TodoService();
    this.getTodos = this.getTodos.bind(this); //&******
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  getTodos(req, res) {
    const todos = this.todoService.getTodos();
    res.json({
      todos,
    });
  }
  createTodo(req, res) {
    const getTodo = this.todoService.createTodo(req.body.todo);
    res.json({
      todo: getTodo,
    });
  }
  deleteTodo(req, res) {
    const { id } = req.params;
    const todo = this.todoService.deleteTodo(id);
    res.json({ deletedTodo: todo });
  }
  updateTodo(req, res) {
    const { id } = req.params; // const id = req.params.id
    const { todo: updatedTodo } = req.body;
    //const updatedTodo = {todo: req.body }
    const todo = this.todoService.updateTodo(id, updatedTodo);
    res.json({ updatedTodo: todo });
  }
}
