const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

//? Handle Auth middleware for all GET, POST, ... request
// app.use("/admin", (req, res, next) => {
//   const token = "xyz";
//   const isAuthorized = token === "xyz";
//   if (!isAuthorized) {
//     res.status(401).send("unauthorized acess");
//   } else {
//     next();
//   }
// });

//? Directly passing middleware
app.get("/user", userAuth, (req, res) => {
  res.send("authorized user");
});

//? second way of passing middleware
app.use("./admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("authorized admin");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("authorized, data deleted !!");
});

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
