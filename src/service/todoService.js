import { Todo } from "../model/Todo";
export class TodoService {
  constructor() {
    this.todos = [
      new Todo("Study Javascript"),
      new Todo("Study Linear Algebra"),
      new Todo("Study Data Structure"),
    ];
  }
  getTodos() {
    //:Database
    return this.todos;
  }
  createTodo(todoDesc) {
    const todoModel = new Todo(todoDesc);
    this.todos.push(todoModel);
    return todoModel;
  }
  deleteTodo(id) {
    const targetTodo = this.todos.find((todo) => todo.id === Number(id));
    this.todos = this.todos.filter((todo) => todo.id !== Number(id));
    console.log(this.todos, id);
    return targetTodo;
  }
  updateTodo(id, todo) {
    const targetTodo = this.todos.find((todo) => todo.id === Number(id));
    targetTodo.desc = todo;
    targetTodo.updated = new Date();
    console.log(this.todos);
    return targetTodo;
  }
}
