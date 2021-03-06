'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();
 
router
  .get('/', passport.authenticate('google', { scope: ['profile', 'email'], session: false }))
  .get('/callback', passport.authenticate('google', { failureRedirect: '/', session: false }), auth.setTokenCookie);

module.exports = router;