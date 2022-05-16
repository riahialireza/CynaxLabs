import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import apiV1 from "./apiV1";
import apiV2 from "./apiV2";
mongoose.connect("mongodb://localhost:27017/cynaxLabs");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", apiV1);
app.use("/v2", apiV2);
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
