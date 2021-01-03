import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Test');
    console.log(add(4, 5));
});

app.listen(4000, () => console.log('Server running'));