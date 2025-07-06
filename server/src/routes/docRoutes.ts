import express from "express";
import embedDocController from "../controller/embedDocController";
import genResponseController from "../controller/genResponseController";

const router = express.Router();

router.get("/embed", embedDocController);
router.post("/query", genResponseController);

export default router;
