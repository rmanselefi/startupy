const passport = require("passport");
const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("users");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((us) => {
        if (us) {
          done(null, us);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((usr) => done(null, usr));
        }
      });
    }
  )
);
