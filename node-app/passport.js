const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel'); // Import your user model

passport.use(new LocalStrategy(User.authenticate()));//This line configures Passport.js to use the LocalStrategy for user authentication.
passport.serializeUser(User.serializeUser());//This line configures how Passport.js serializes users into the session. 
passport.deserializeUser(User.deserializeUser());//This line configures how Passport.js deserializes users from the session

module.exports = passport;
