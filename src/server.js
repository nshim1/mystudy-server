import cors from "cors";
import express from "express";
import { specs, swaggerUIExpress } from "./doc/swagger";
import rootRouter from "./route"; //index.js omission
import { todoRouter } from "./route/todo";
import { calRouter } from "./route/calculator";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/", rootRouter);
app.use("/todos", todoRouter);
app.use("/calculator", calRouter);
app.use("/docs", swaggerUIExpress.serve, swaggerUIExpress.setup(specs));

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
