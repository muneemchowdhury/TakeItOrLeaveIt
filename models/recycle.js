const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recycleSchema = new Schema({
    bussinessName: { type: String, required: true },
    adress: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Recycle = mongoose.model("Recycle", recycleSchema);

module.exports = Recycle;