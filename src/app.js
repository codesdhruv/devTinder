const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  // try {
  throw new Error("generating error manually");
  // } catch (error) {
  //   res.status(500).send("something catch in catch-block");
  // }
});

//? wildcart error handeling,  always use at last
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong contact support");
  }
});

app.listen(7777, () => {
  console.log("server is sucessfully listening at port 7777....");
});
