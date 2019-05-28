const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('../auth/tokenService');
const db = require('usersModel') //...needs to be written

//=========================================== Register API
router.post('/register', (req, res) => {})

//=========================================== Login API
router.post('/login', (req, res) => {})

module.exports = router;