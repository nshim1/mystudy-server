import express from "express";
import { TodoController } from "../controller/todoController";

export const todoRouter = express.Router();
const todoController = new TodoController();

/**
 * @swagger
 * paths:
 *  /todos:
 *    get:
 *      summary: "Select all todos data"
 *      description: "read all todo list"
 *      tags: [Todos]
 *      responses:
 *        "200":
 *          description: All Todos data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    todos:
 *                      type: object
 *                      example:
 *                          [
 *                            {
 *                              "id": 1,
 *                              "desc": "Study javascript",
 *                              "done": false,
 *                              "created": "2023-01-07T04:49:55.092Z",
 *                              "updated": "2023-01-07T04:49:55.092Z"
 *                            },
 *                            {
 *                              "id": 2,
 *                              "desc": "Study Linear Algebra",
 *                              "done": false,
 *                              "created": "2023-01-08T04:49:55.092Z",
 *                              "updated": "2023-01-08T04:49:55.092Z"
 *                            }
 *                          ]
 */
todoRouter.get("/", todoController.getTodos);
/**
 * @swagger
 *
 * /todos:
 *  post:
 *    summary: "Add a todo"
 *    description: "Register one new todo"
 *    tags: [Todos]
 *    requestBody:
 *      description: Register todo with todo desccription
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              todo:
 *                type: string
 *                description: "New todo description"
 */
todoRouter.post("/", todoController.createTodo);
/**
 * @swagger
 *
 * /todos/{id}:
 *  delete:
 *    summary: "Delete a todo"
 *    description: "Remove a targetted todo"
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: target id to remove
 *    responses:
 *      "200":
 *        description: Removed Todo data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                todo:
 *                  type: object
 *                  example:
 *                    {
 *                      "id": 1,
 *                      "desc": "Study javascript",
 *                      "done": false,
 *                      "created": "2023-01-07T04:49:55.092Z",
 *                      "updated": "2023-01-07T04:49:55.092Z"
 *                    }
 */
todoRouter.delete("/:id", todoController.deleteTodo);
/**
 * @swagger
 *
 * /todos/{id}:
 *  put:
 *    summary: "Update a todo"
 *    description: "Update a targetted todo"
 *    tags: [Todos]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: target id to update
 *    requestBody:
 *      description: Update todo
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              todo:
 *                type: string
 *                description: "Updated todo description"
 *    responses:
 *      "200":
 *        description: Updated Todo data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                todo:
 *                  type: object
 *                  example:
 *                    {
 *                      "id": 1,
 *                      "desc": "Study javascript",
 *                      "done": false,
 *                      "created": "2023-01-07T04:49:55.092Z",
 *                      "updated": "2023-01-07T04:49:55.092Z"
 *                    }
 */
todoRouter.put("/:id", todoController.updateTodo);
