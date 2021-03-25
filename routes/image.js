// const mongoose = require("../../_connection");
const express = require("express");
const Router = express.Router();
const image = require("../models/image");

Router.get("/", function (request, response) {
  image.find({}, function (error, image) {
    if (error) {
      response.sendStatus(404);
    }
    response.json(image);
  })
})

Router.get("/:id", function (request, response) {
  image.findOne({id: request.params.id}, function (error, image) {
    if (error || !image) {
      response.status(404).send({
        error: `Not found`
      });
    }
    response.render("pages/single-page", {
      siteTitle: "100 Cinema",
      pageTitle: image.title,
      image: image});
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
// const express = require("express");
// const Router = express.Router();

// // module for views - see comments for more context
// const image = require("../models/image");


// Router.get("/images/:id", function (request, response) {
//   response.render("pages/single-page", {
//     pageTitle: image.title,
//     image: image
//   })
// })



// // Router.get("/", function(request, response) {
// //   response.json(images);
// // })

// // Router.get("/image", function(request, response) {
// //     response.render("pages/single-page");
// //   image.find(function(error, images) {
// //     if (error) {
// //       response.sendStatus(404);
// //     }
// //     response.json(images)
// //   })
// // })

// // Router.get("/:id", function(request, response) {
// //   image.find({id: request.params.id}, function(error, image){
// //     if (error) {
// //       response.sendStatus(404);
// //     }
// //     response.json(image);
// //   })
// // })

// module.exports = Router;