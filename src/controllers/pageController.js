const Pet = require("../models/pet");
const createMenuObject = require("../helpers/createMenuObject");

const home = (req, res) => {
  let list = Pet.getAll();

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list,
  });
};

const dogs = (req, res) => {
  let list = Pet.getFromType("dog");

  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list,
  });
};

const cats = (req, res) => {
  let list = Pet.getFromType("cat");

  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list,
  });
};

const fishes = (req, res) => {
  let list = Pet.getFromType("fish");

  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  });
};

module.exports = { home, dogs, cats, fishes };
