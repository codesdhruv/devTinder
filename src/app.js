const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/users");
const app = express();

//? localhost:7777/signup
app.post("/signup", async (req, res) => {
  //? create a new instance of user model
  const user = new User({
    firstName: "virat",
    lastName: "sharma",
    emailid: "rohit@gmail.com",
    password: "rohit@123",
  });
  try {
    await user.save();
    res.send("data saved sucessfully !!");
  } catch (error) {
    console.log("error occured");
  }
});

connectDB()
  .then(() => {
    //? First connecting DB => starting server
    console.log("databse connection establisned !!");
    app.listen(7777, () => {
      console.log("server is sucessfully listening at port 7777....");
    });
  })
  .catch((err) => {
    console.log("database connection error occured");
  });
