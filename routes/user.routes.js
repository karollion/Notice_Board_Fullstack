const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

router.post('/auth/reginster', UserController.reginster);

router.post('/auth/login', UserController.login);

router.get('/auth/user', UserController.getUser);

module.exports = router;