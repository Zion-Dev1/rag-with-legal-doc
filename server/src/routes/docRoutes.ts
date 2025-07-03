import express from "express";
import embedDocController from "../controller/embedDocController";
import queryDocController from "../controller/queryDocController";

const router = express.Router();

router.get("/embed", embedDocController);
router.post("/query", queryDocController);

export default router;
