import express, {Application} from 'express';
import path from "path";
import compression from "compression";
import startRoutes from "./routes/staterRoutes";

const app: Application = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(express.json());
app.use(startRoutes);
app.use(
    express.static(path.join(__dirname, "public"))
);

export default app;