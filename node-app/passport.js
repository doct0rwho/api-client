// shared-auth/passport-config.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel'); // Adjust the path as needed

// Passport.js configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Export Passport.js and any related functions
module.exports = passport;
