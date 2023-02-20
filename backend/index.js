const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const connetion = require("./db");
const LoginRouter = require("./routes/login.route");
const RegisterRoute = require("./routes/register.route");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/register", RegisterRoute);
app.use("/login", LoginRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connetion;
    console.log("mongoose connected");
  } catch (err) {
    console.log("mongoose not connected");
  }
  console.log("server is runnig on", process.env.PORT);
});
