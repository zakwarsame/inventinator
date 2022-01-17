const mongoose = requier("mongoose");

const StockSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    price: { type: Number },
    categories: { trpe: Array },
  },
  { timestaps: true }
);

module.exports = mongoose.model("Stock", StockSchema);
