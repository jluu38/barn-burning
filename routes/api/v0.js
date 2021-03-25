// const mongoose = require("../../_connection");
const express = require("express");
const Router = express.Router();
const image = require("../../models/image");

Router.get("api/v0/images", function (request, response) {
  image.find({}, function (error, image) {
    if (error) {
      response.sendStatus(404);
    }
    response.json(image);
  })
})

Router.get("api/v0/images/:id", function (request, response) {
  image.findOne({id: request.params.id}, function (error, image) {
    if (error || !image) {
      response.status(404).send({
        error: `Not found`
      });
    }
    response.json(image);
  })
  // const image =
  //   image.find(function (item) {
  //     return item.id === request.params.id;
  //   })
  // // ({id: request.params.id
  // // }, function (error, image) {

  // if (image) {
  //   response.sendStatus(404);
  // }
  // response.json(image);
})

module.exports = Router;