const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    // res.send("Rote Handler 1 !!");
    next();
    console.log("Route hamdler 1 !!");
  },
  (req, res, next) => {
    console.log("Route hamdler 2 !!");
    // res.send("Rote Handler 2 !!");
    next();
  },
  (req, res, next) => {
    console.log("Route hamdler 3 !!");
    // res.send("Rote Handler 3 !!");
    next();
  },
  (req, res, next) => {
    console.log("Route hamdler 4 !!");
    next();
    //? the order of execution comes here after next() is called
    res.send("Rote Handler 4 !!");
  },
  (req, res, next) => {
    console.log("Route hamdler 5 !!");
    // res.send("Rote Handler 5!!");
  }
);

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
