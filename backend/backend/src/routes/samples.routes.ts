import { Router } from "express";
import { getSamplesHandler } from "../controllers/samples.controller";

const router = Router();

router.get("/", getSamplesHandler);

export default router;
