require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// app.use(helmet())
app.use(express.json());

app.use("/api", require("./handlers/handler.js"));

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Mongodb");
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
