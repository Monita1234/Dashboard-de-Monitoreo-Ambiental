import express from "express";
import cors from "cors";
import samplesRoutes from "./routes/samples.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/samples", samplesRoutes);

export default app;
