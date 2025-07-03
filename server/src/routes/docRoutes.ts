import express from "express";
import embedDocController from "../controller/embedDocController";

const router = express.Router();

router.get("/embed", embedDocController);

export default router;
