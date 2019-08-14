const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the itemss below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const itemSeed = [{
        type: "Electronics",
        contact: "555-555-5555",
        description: "old and dirty.",
        image: "...",
        date: new Date(Date.now())
    }




];

db.Item
    .remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });