import express from "express";
import { calculateController } from "../controller/calculateController";

export const calRouter = express.Router();

// app.get("/calculator/sum/:num1/:num2", calculateController.getSum);
calRouter.get("/sum/:num1/:num2", calculateController.getSum);
calRouter.get("/sum", calculateController.getSumJquery);
calRouter.get("/divide", calculateController.getDivision);
