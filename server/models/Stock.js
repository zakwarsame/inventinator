const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    img: { type: String },
    tags: { type: Array, required: true, lowercase: true },
    price: { type: Number, required: true },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", StockSchema);
