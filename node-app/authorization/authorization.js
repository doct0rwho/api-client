const User = require('../models/userModel');
const passport = require('../passport'); 
class Auth{

    async registration(req,res){
        try {
            const { username, password } = req.body;

            // Use Passport.js to register the user
            User.register(new User({ username }), password, (err, user) => {
              if (err) {
                console.error(err);
                return res.status(400).json({ status: 'error', message: 'User registration failed.' });
              }
      
              // Log the user in after successful registration
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
}
module.exports = new Auth();