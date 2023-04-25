const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("Connexion à MongoDB effectuée !"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
