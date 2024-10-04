const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://kunaldatabase:7NfTAPpqnR5lyxqr@namastenode.1ifby.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
