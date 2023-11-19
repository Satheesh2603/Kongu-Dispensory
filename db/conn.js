const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose
  .connect("mongodb+srv://vishnuk55265:vishnuk55265@cluster0.svueomz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
