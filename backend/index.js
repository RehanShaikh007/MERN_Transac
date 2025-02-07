import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoutes.js";
import fetchData from "./utils/fetchData.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error(err);
  });

fetchData();

app.use("/api", transactionRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running on PORT ${port}`);
});
