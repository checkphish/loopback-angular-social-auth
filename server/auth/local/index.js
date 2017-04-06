'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', { failureRedirect: '/login' }, function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = jwt.sign({_id: user.userId }, 'checkphish', { expiresIn: 60*5 });
    res.json({token: token});
  })(req, res, next)
});

module.exports = router; 