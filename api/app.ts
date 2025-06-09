import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import UsersRouters from "../src/routes/UsersRoutes";
import AuthRoutes from "../src/routes/AuthRoutes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/users", UsersRouters);
app.use("/auth", AuthRoutes);

export default app;
