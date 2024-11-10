import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";

//app config
const PORT = process.env.PORT || 3000;
const app = express();
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//api route
app.get("/home", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log("server is running on port" + PORT);
});
