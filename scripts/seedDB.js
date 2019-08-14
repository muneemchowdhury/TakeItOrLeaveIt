const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const recycleSeed = [{
        bussinessName: "Star Recycling",
        address: "123 Varick Ave Williamsburg in Brooklyn, NY ",
        synopsis: "Wholesale Recycling Depots.",
        zip:"11211",
        date: new Date(Date.now())
    },
    {
        bussinessName: "Saga Recycling",
        address: "1305 67th St Dyker Heights in Brooklyn, NY",
        synopsis: "Wholesale Recycling Depots.",
        zip:"11219",
        date: new Date(Date.now())
    },
    {
        bussinessName: "Metropolitan Paper Recycling",
        address: "847 Shepherd Ave East New York in Brooklyn, NY",
        synopsis: "Wholesale Recycling Depots.",
        zip:"11207",
        date: new Date(Date.now())
    },
    {
        bussinessName: "Boro-Wide Recycling Corporation",
        address: "3 Railroad Pl Maspeth in Queens, NY ",
        synopsis: "Business Consultants, Street Cleaning Equipment Manufacturers, Home & Garden.",
        zip:"11378",
        date: new Date(Date.now())
    }


];

db.Recycle
    .remove({})
    .then(() => db.Recycle.collection.insertMany(recycleSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });