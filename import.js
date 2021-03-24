const mongoose = require("./_connection");

const dbSeed = require("./seeds/images");

const image = require("./models/image");

image.insertMany(dbSeed, function(error, image) {
    console.log("Data import completed.");
    mongoose.connection.close();
})