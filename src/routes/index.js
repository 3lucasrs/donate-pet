const express = require("express");
const router = express.Router();
const PageController = require("../controllers/pageController");
const SearchController = require("../controllers/searchController");

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchController);

module.exports = router;
