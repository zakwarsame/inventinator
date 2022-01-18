const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const inventoryRoute = require("./routes/inventory");

dotenv.config();

// Connecting to Mongo
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

//json parser middleware
app.use(express.json());


app.use("/api/inventory", inventoryRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on 5000");
});
