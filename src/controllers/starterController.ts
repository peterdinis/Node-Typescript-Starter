import type { Request, Response } from "express";

export const starterFn = (req: Request, res: Response) => {
	res.send("HOME");
};
