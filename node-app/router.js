const express = require('express');
const router = express.Router();
const functi = require('./authorization/authorization')


router.post('/registration', functi.registration)


module.exports = router;