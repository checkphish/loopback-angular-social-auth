var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var authConfig = require('../auth.config.json');

exports.setup = function (app) {
  passport.use(new  LinkedInStrategy({
      clientID: authConfig.linkedin.clientID,
      clientSecret: authConfig.linkedin.clientSecret,
      callbackURL: authConfig.linkedin.callbackURL

    },
    function(accessToken, refreshToken, profile, done) {
      var User = app.models.user;
      User.find({where: {linkedinId: profile.id}, limit: 3},  function(err, accounts){
        if(err) console.log('error==> ', err);
        var newUser = {};
        newUser.linkedinId = profile.id ;
        newUser.email = profile.id +  '@test.com';
        newUser.username = profile.displayName;
        newUser.provider = profile.provider;
        newUser.role = 'user';
        newUser.password = profile.id;
        if(accounts.length == 0) {

          User.create(newUser, function(err, user) {   
            if (err) {
              done(err);
            } else {
              console.log('user successfully created', user);
              return done(err, user);
            }

          });
        } else {
          return done(err, accounts[0]);
        }
      });
    }
  ));
};
