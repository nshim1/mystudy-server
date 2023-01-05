import { Todo } from "../model/Todo";
export class TodoService {
  constructor() {
    this.todos = [
      new Todo("Study javascript"),
      new Todo("Study linear algebra"),
      new Todo("Study data structure"),
    ];
  }
  getTodos() {
    //:Database
    return this.todos;
  }
  createTodo(todo) {
    const todoModel = new Todo(todo);
    this.todos.push(todoModel);
  }
}
