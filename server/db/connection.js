const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

const dbConnection = async () => {
  try {
    mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.log("Database not connected", error);
  }
};

module.exports = dbConnection;
