import express from "express";
import { calculateController } from "../controller/calculateController";

export const calRouter = express.Router();

// app.get("/calculator/sum/:num1/:num2", calculateController.getSum);
/**
 * @swagger
 * paths:
 *  /calculator/sum/{num1}/{num2}:
 *    get:
 *      summary: "Sum two numbers"
 *      description: "Calculate the sum of the numbers "
 *      tags: [Calculator]
 *      parameters:
 *      - in: path
 *        name: num1
 *        required: true
 *        description: num1
 *      - in: path
 *        name: num2
 *        required: true
 *        description: num2
 *      responses:
 *        "200":
 *          description: total of the sum data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    sum:
 *                      type: string
 *                      example:
 *                          [
 *                            {"total": "8"}
 *                          ]
 */
calRouter.get("/sum/:num1/:num2", calculateController.getSum);
/**
 * @swagger
 * paths:
 *  /calculator/sum:
 *    get:
 *      summary: "Sum two numbers"
 *      description: "[query]Calculate the sum of the numbers "
 *      tags: [Calculator]
 *      parameters:
 *      - in: query
 *        name: num1
 *        required: true
 *        description: num1
 *      - in: query
 *        name: num2
 *        required: true
 *        description: num2
 *      responses:
 *        "200":
 *          description: total of the sum data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    sum:
 *                      type: string
 *                      example:
 *                          [
 *                            {"total": "8"}
 *                          ]
 */
calRouter.get("/sum", calculateController.getSumJquery);
/**
 * @swagger
 * paths:
 *  /calculator/divide:
 *    get:
 *      summary: "Divide two numbers"
 *      description: "[query]Calculate the division of the numbers "
 *      tags: [Calculator]
 *      parameters:
 *      - in: query
 *        name: num1
 *        required: true
 *        description: num1
 *      - in: query
 *        name: num2
 *        required: true
 *        description: num2
 *      responses:
 *        "200":
 *          description: show the division data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    divide:
 *                      type: string
 *                      example:
 *                          [
 *                            {"division": "8"}
 *                          ]
 */
calRouter.get("/divide", calculateController.getDivision);
