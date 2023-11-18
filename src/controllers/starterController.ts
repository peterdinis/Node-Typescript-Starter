import { Response, Request} from "express";

export const starterFn = (req: Request, res: Response) => {
    res.send("HOME");
}