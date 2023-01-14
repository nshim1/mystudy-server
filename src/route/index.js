import express from "express";
import { userController } from "../controller/userController";
const app = express.Router();
/**
 * @swagger
 * paths:
 *  /users:
 *    get:
 *      summary: "Query all user data"
 *      description: "Show all user data"
 *      tags: [Root]
 *      responses:
 *        "200":
 *          description: All user information
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    userId:
 *                      type: string
 *                      example:
 *                          "12345"
 */
app.get("/users", userController.getUID);
/**
 * @swagger
 * paths:
 *  /email:
 *    get:
 *      summary: "Create welcome email template"
 *      description: "email template service"
 *      tags: [Root]
 *      responses:
 *        "200":
 *          description: Email template
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    template:
 *                      type: string
 *                      example:
 *                          "<html>...</html>"
 */
app.get("/email", userController.getEmailTemplate);
/**
 * @swagger
 * paths:
 *  /signin:
 *    put:
 *      summary: "Update logged in user info"
 *      description: "login service"
 *      tags: [Root]
 *      responses:
 *        "200":
 *          description: User login
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    email:
 *                      type: string
 *                      example:
 *                          "test@test.com"
 *                    password:
 *                      type: string
 *                      example:
 *                          "test123"
 */
app.put("/signin", userController.signIn);
/**
 * @swagger
 * paths:
 *  /signup:
 *    post:
 *      summary: "User register"
 *      description: "Sign up service"
 *      tags: [Root]
 *      responses:
 *        "200":
 *          description: User sign up
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    email:
 *                      type: string
 *                    password:
 *                      type: string
 */
app.post("/signup", userController.signUp);

export default app;
