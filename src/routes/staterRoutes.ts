import {starterFn} from "../controllers/starterController";
import express, {Router} from "express";

const router: Router = express.Router();

router.get("/", starterFn);

export default router;