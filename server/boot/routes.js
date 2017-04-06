// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.json');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var auth = require('../auth/auth.service');
var path = require('path');
var config = require('../../server/config.json');

module.exports = function(app) {
  var User = app.models.user;
  //get current user
  app.get('/things/users/me',  auth.isAuthenticated(app), function(req, res, next) {
    User.findById(req.user.id, function(err, user) {
      console.log('created and retrieved user for "-me-"==> ', user);
      res.json(user);
    });
  });

  //auth
  app.use('/auth', require('../auth')(app));
   //verified
  app.get('/verified', function(req, res) {
    res.redirect('/#!/veryfied');
  });
};

