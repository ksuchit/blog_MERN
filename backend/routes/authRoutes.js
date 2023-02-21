const { registration } = require('../controller/authController');

const router = require('express').Router();

router.post('/auth/registration', registration)

module.exports=router 