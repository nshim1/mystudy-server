import express from "express";
import { userController } from "../controller/userController";
const app = express.Router();

app.get("/user", userController.getUID);
app.get("/email", userController.getEmailTemplate);
app.put("/signin", userController.signIn);
app.post("/signup", userController.signUp);

export default app;
