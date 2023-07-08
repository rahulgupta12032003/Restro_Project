require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Your Server is Working Fine!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is started at ${PORT}`);
  console.log(`Server is running at http://localhost:${PORT}`);
});
