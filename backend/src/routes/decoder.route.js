import { Router } from "express";
import decoderController from "../controllers/decoderController";

const decoderRouter = Router();

decoderRouter.route("/").post(decoderController.decode);

export default decoderRouter;
