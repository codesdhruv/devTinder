const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstname: "Kunal", lastname: "kunal" });
});
app.post("/user", (req, res) => {
  //databse logic
  res.send("Data saved sucessfully in to the database");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted sucessfully!!");
});

//Note: any route starting with below one i.e. "/" will be override by this route handler
//      so use it carefully
//      this route will overide "/test" and "/home" route handlers
// app.use() will handle all the HTTP request
app.use("/", (req, res) => {
  res.send("hello from dashboard");
});

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
