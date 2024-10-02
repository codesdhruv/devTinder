const express = require("express");

const app = express();

//Note: any route starting with below one i.e. "/" will be override by this route handler
//      so use it carefully
//      this route will overide "/test" and "/home" route handlers
app.use("/", (req, res) => {
  res.send("hello from dashboard");
});

app.use("/test", (req, res) => {
  res.send("hello from test route");
});
app.use("/home", (req, res) => {
  res.send("Namste from home");
});

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
