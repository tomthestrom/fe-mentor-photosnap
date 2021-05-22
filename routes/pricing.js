
var express = require("express");
var router = express.Router();

var pricingDB = require("../config/pricing-mock.cfg");
var ejsCfg = require("../config/ejs.cfg");

var socialCfg = require("../config/social.cfg");

//mock :D
/* GET home page. */
router.get("/", function (req, res, next) {
  var VIEW_NAME = "pricing";

  res.render(VIEW_NAME, {
    viewName: VIEW_NAME,
    featured: pricingDB.featured,
    plans: pricingDB.plans,
    features: pricingDB.features,
    isHomePage: false,
    ejsRootPath: ejsCfg.ejsRootPath,
    socialLinks: socialCfg,
    hostName: req.protocol + '://' + req.get('host')
  });
});

module.exports = router;
