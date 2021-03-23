// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

// const PORT = 3000;
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`K8s-helllo-world is running on port ${PORT}`);
});
