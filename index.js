import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import programRoute from "./routes/program.route.js";
import galleryRoute from "./routes/gallery.route.js";
import registerRoute from "./routes/register.route.js";
import partnersRoute from "./routes/partners.route.js";


dotenv.config();

const port = process.env.PORT || 5000;

await db();

const app = new express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/programs", programRoute);
app.use("/gallery", galleryRoute);
app.use("/register", registerRoute);
app.use("/partners", partnersRoute);





app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
