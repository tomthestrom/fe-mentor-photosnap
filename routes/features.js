var express = require('express');
var router = express.Router();

var featuresDB = require("../config/features-mock.cfg");
var ejsCfg = require("../config/ejs.cfg");

var socialCfg = require("../config/social.cfg");

router.get("/", function(req, res, next) {
  var VIEW_NAME = "features";

  res.render(VIEW_NAME, {
    viewName: VIEW_NAME,
    featured: featuresDB.featured,
    features: featuresDB.features,
    isHomePage: false,
    ejsRootPath: ejsCfg.ejsRootPath,
    socialLinks: socialCfg
  });
});

module.exports = router;
