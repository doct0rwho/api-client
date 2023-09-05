const User = require('../models/userModel')
const passport = require('../passport'); 
class Auth{

    async registration(req,res){
        try {
            const { username, password } = req.body;            
            // Use Passport.js to register the user
           
            User.register(new User({ username }), password, (err, user) => {
              if (err) {
                console.error(err.message);              
                return res.status(400).json({ status: 'error', message: 'User registration failed.' });
              }
              
              passport.authenticate('local')(req, res, () => {
                return res.status(200).json({ status: 'success', message: 'User registered and logged in.' });
              });
            });

        } catch (error) {
            console.log(error)
            return res.status(400).json({
                status: "error"
            })
        }
}
async login(req,res){
  try {
    const { username, password } = req.body;

    // Use Passport.js to authenticate the user
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ status: 'error', message: 'An error occurred during login.' });
      }
      if (!user) {
        return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
      }

      // Log the user in
      req.login(user, (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return res.status(500).json({ status: 'error', message: 'An error occurred during login.' });
        }
        return res.status(200).json({ status: 'success', message: 'Logged in successfully.' });
      });
    })(req, res); // Pass the request and response objects to passport.authenticate

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 'error',
      message: 'Login failed.',
    });
  }
}
}
module.exports = new Auth();