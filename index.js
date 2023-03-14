import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import programRoute from "./routes/program.route.js";

dotenv.config();

const port = process.env.PORT || 5000;

await db();

const app = new express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/programs", programRoute);


app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
