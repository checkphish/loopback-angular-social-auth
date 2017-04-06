var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (app, config) {
  var User = app.models.user;
  
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.login({
        email: email.toLowerCase(),
        password: password
      }, 'user', function(err, token) {
        if (err) {
          console.log('login error==> ', err);
          return done(err);
        } else {
          console.log('login success==> ', token);
         return done(null, token);
        }

      });

    }
  )); 
};

