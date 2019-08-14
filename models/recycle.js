const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recycleSchema = new Schema({
    bussinessName: { type: String, required: true },
    address: { type: String, required: true },
    zip: String,
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Recycle = mongoose.model("Recycle", recycleSchema);

module.exports = Recycle;