const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/register', userController.renderRegisterForm);
router.post('/register', userController.register);
router.get('/login', userController.renderLoginForm);
router.get('/login', userController.login);



module.exports = router;