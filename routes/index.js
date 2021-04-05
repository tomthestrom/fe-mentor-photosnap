var express = require('express');
var router = express.Router();

//mock
var indexDB = {
  "featured" : [
    
  ],
  "stories" : [

  ],
  "features" : [

  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
