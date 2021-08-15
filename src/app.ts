import express, {Application, Request, Response, NextFunction} from 'express';
import path from "path";
import compression from "compression";
import bodyParser from "body-parser";

const app: Application = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

export default app;