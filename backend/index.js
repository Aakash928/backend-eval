const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const connetion = require("./db");

app.get("/", (req, res) => {
    res.send("welcome");
  });

  app.listen(process.env.PORT, async () => {
    try {
      await connetion;
      console.log("mongoose connected");
    } catch (err) {
      console.log("mongoose not connected");
    }
    console.log("server is runnig on", process.env.PORT);
  });