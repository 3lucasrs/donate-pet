const Pet = require("../models/pet");
const createMenuObject = require("../helpers/createMenuObject");

const search = (req, res) => {
  const query = req.query["q"];
  let list = Pet.getFromName(query);
  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
  });
};

module.exports = search;
