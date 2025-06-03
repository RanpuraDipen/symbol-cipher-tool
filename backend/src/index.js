import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import router from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use("/api", router);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`API on http://localhost:${port}`));

export default app;
