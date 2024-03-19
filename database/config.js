const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN);
    console.log("DB Connected");
  } catch (error) {
    throw new Error("Error al levantar la BD");
  }
};

module.exports = {
  dbConnection,
};
