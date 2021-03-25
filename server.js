// modules
const express = require('express');
const app = express();

app.set("view engine", "ejs");
const path = require("path");

const images = require("./routes/image");
require("dotenv").config();
const mongoose = require('./_connection.js');
const api = require("./routes/api/v0");

// static file serving middleware
app.use(express.static("./public"));
app.use("/api/v0", api);
app.use("/images", images);

app.use(function(request, response) {
  response.sendStatus(404);
});

// env variables w/ default port
const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on ${HOST}:${PORT}`);
});