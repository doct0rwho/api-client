const express = require('express');
const router = express.Router();
const functi = require('./authorization/authorization')
const passport = require('./passport')
const dotenv = require('dotenv');
dotenv.config();

router.use(require('express-session')({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
router.use(passport.initialize());
router.use(passport.session());


router.post('/registration', functi.registration)
router.post('/login', functi.login);
router.get('/test', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ status: 'success', message: 'You are logged in.' });
    });


module.exports = router;