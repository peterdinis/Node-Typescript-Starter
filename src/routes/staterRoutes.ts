import {starterFn} from "../controllers/starterController";
import * as express from "express";

const router = express.Router();

router.get("/", starterFn);

export default router;