const mongoose = require("../../_connection");
const express = require("express");
const Router = express.Router();
const image = require("../../models/image");

// Router.get("/", function(request, response) {
//   response.json(images);
// })

Router.get("/image", function(request, response) {
  image.find(function(error, images) {
    if (error) {
      response.sendStatus(404);
    }
    response.json(images)
  })
})

Router.get("/image/:id", function(request, response) {
  image.find({id: request.params.id}, function(error, image){
    if (error) {
      response.sendStatus(404);
    }
    response.json(image);
  })
})

module.exports = Router;