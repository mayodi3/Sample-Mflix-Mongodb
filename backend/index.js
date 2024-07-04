import express from "express";
import helmet from "helmet";
import cors from "cors";
import moviesRoutes from "./routes/moviesRoutes.js";
import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRoutes);

const connectToDBAndServer = async () => {
  await connect(URI);
  console.log("Connected to MongoDB...");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
};

connectToDBAndServer();
