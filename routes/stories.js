var express = require('express');
var router = express.Router();

var storiesDB = require("../config/stories-mock.cfg");
var ejsCfg = require("../config/ejs.cfg");

var socialCfg = require("../config/social.cfg");

router.get("/", function(req, res, next) {
  res.render("stories", {
    featuredStories: storiesDB.featured,
    stories: storiesDB.stories,
    isHomePage: false,
    ejsRootPath: ejsCfg.ejsRootPath,
    socialLinks: socialCfg
  });
});

module.exports = router;
