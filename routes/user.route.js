// routes/user.route.js
const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

const userValidationRules = [
  check('email', 'Please include a valid email').isEmail(),
  check('name', 'Name is required').not().isEmpty(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
];

router.post('/create-user', userValidationRules, userController.createUser);
router.get('/', userController.readUsers);
router.get('/edit-user/:id', userController.getSingleUser);
router.put('/update-user/:id', userValidationRules, userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.post('/login', userController.loginUser);

module.exports = router;
