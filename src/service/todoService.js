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
  createTodo(todo) {
    const todoModel = new Todo(todo);
    this.todos.push(todoModel);
  }
}

//note

export function getEmailTemplate(req, res) {
  console.log(req.body);
  const template = userService.getEmailTemplate(req.body.name);
  res.json({
    template,
  });
}
