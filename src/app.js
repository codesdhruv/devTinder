const express = require("express");

const app = express();

app.get("/a(bc)?d", (req, res) => {
  res.send({ firstname: "Kunal", lastname: "kunal" });
});

//? REGEX use
app.get(/z/, (req, res) => {
  res.send({ firstname: "Kunal", lastname: "kunal" });
});

app.get(/.*fly$/, (req, res) => {
  res.send({ firstname: "fly", lastname: "fly" });
});

//? Reading Query params - localhost:7777/user?userid=202&password=testing
app.get("/users", (req, res) => {
  console.log(req.query);
  res.send({ firstname: "Kunal", lastname: "kunal" });
});

//? making route dynamically - localhost:7777/user/700/Akshay/Testing
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Kunal", lastname: "kunal" });
});

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
