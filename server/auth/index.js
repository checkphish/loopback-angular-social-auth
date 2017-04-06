'use strict';

var express = require('express');
var passport = require('passport');

var router = express.Router();


module.exports = router;  

module.exports = function(app) {
  require('./google/passport').setup(app);
  require('./local/passport').setup(app);
  require('./linkedin/passport').setup(app);

  router.use('/google', require('./google'));
  router.use('/local', require('./local'));
  router.use('/linkedin', require('./linkedin'));
  
  return router;
}