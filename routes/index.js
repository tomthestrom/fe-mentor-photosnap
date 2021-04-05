var express = require("express");
var router = express.Router();

var indexDB = require("../config/index-mock.cfg");
var ejsCfg = require("../config/ejs.cfg");

var socialCfg = require("../config/social.cfg");

//mock :D
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    featured: indexDB.featured,
    stories: indexDB.stories,
    features: indexDB.features,
    isHomePage: true,
    ejsRootPath: ejsCfg.ejsRootPath,
    socialLinks: socialCfg
  });
});

module.exports = router;
