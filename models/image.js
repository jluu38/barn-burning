const mongoose = require("./connection.js")

const kittenSchema = new mongoose.Schema({
  id: Number,
  name: String,
  colour: String
});

const Kitten = mongoose.model("Kitten", kittenSchema);

const snowball = new Kitten ({
  id: 666,
  name: "Snowball",
  colour: "white"
});

snowball.save(function (err, snowball) {
  if (err) return console.error(err);
  console.log(snowball);
})

const finnigan = new Kitten ({
  id: 420,
  name: "Finnigan",
  colour: "tabby"
});

finnigan.save(function (err, finnigan) {
  if (err) return console.error(err);
  console.log(finnigan);
});