 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const itemSchema = new Schema({
     type: { type: String, required: true },
     contact: { type: String, required: true },
     description: { type: String },

     date: { type: Date, default: Date.now }
 });

 const Item = mongoose.model("Item", itemSchema);

 module.exports = Item;