const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const inventoryRoute = require("./routes/inventory");
const cors = require("cors");

dotenv.config();

// Connecting to Mongo db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

// ======== Middleware ========

//json parser middleware
app.use(express.json());

app.use(cors());
app.use("/api/inventory", inventoryRoute);

app.get("/", (req, res) => res.send("Hello from Express!"));

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on 5000");
});
