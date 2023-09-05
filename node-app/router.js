const express = require('express');
const router = express.Router();
const functi = require('./func/funcion')


router.post('/web/:a', functi.getFuncion)


module.exports = router;