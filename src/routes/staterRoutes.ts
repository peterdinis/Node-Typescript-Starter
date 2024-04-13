import express, { type Router } from "express";
import { starterFn } from "../controllers/starterController";

const router: Router = express.Router();

router.get("/", starterFn);

export default router;
