/**
 * Created by Marijke on 30/11/2017.
 */
const express = require('express');
const router = express.Router();

//Registreer: /user/registreren
router.get('/registreren', function (req, res, next) {
    res.send('Registreer');
});

//Authenticatie: /user/authenticeren
router.post('/authenticeren', function (req, res, next) {
    res.send('Authenticeer');
});

//Profiel: /user/profiel
router.get('/profiel', function (req, res, next) {
    res.send('Uw profiel');
});

//Validatie: /user/valideren
router.get('/valideren', function (req, res, next) {
    res.send('valideren');
});

module.exports = router;