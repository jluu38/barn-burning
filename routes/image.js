const express = require("express");
const Router = express.Router();

// module for views - see comments for more context
const randomColor = require("randomcolor");
const color = randomColor();

const image = require("../models/image");
// const color = randomColor({count:10});
// for (let i = 0; i < color.length; i++){
//   newColor = color[i];
// }

Router.use(function (request, response, next) {
  response.locals = {
    siteTitle: "100 Cinema",
    tagline: "One auditorium. One hundred seats.",
    copyright: "&copy; 2021 Jess Luu. MIT License.",
    color: color
  }
  next();
})

Router.get("/", function (request, response) {
  response.render("pages/gallery", {
    pageTitle: "Gallery."
  });
})

// Router.get("/", function(request, response) {
//   response.json(images);
// })

Router.get("/image", function(request, response) {
    response.render("pages/single-page");
  image.find(function(error, images) {
    if (error) {
      response.sendStatus(404);
    }
    response.json(images)
  })
})

Router.get("/:id", function(request, response) {
  image.find({id: request.params.id}, function(error, image){
    if (error) {
      response.sendStatus(404);
    }
    response.json(image);
  })
})

module.exports = Router;