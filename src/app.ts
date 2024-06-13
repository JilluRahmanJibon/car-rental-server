import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use(globalErrorHandler);

export default app;
