import { Router } from "express";
import encoderRouter from "./encoder.route";
import decoderRouter from "./decoder.route";

const router = Router();

router.use("/encode", encoderRouter);
router.use("/decode", decoderRouter);

export default router;
