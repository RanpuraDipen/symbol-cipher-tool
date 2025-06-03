import { Router } from "express";
import encoderController from "../controllers/encoderController";

const encoderRouter = Router();

encoderRouter.route("/").post(encoderController.encode);

export default encoderRouter;
