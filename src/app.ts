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

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Ping');
});

app.listen(4000, () => console.log('Server running'));