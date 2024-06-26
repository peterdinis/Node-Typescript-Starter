import compression from "compression";
import express, { type Application } from "express";
import startRoutes from "./routes/staterRoutes";

const app: Application = express();

app.use(compression());
app.use(express.json());
app.use(startRoutes);

export default app;
