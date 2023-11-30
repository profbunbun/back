const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Adjust path as necessary
const authMiddleware = require('../middleware/authMiddleware'); // Your authentication middleware

// GET current user's profile
router.get('/current', authMiddleware, async (req, res, next) => {
    try {
        // Assuming the user ID is stored in req.user.id after successful authentication
        const user = await User.findById(req.user.id).select('-password'); // Exclude password from the result
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// UPDATE current user's profile
router.put('/update', authMiddleware, async (req, res, next) => {
    try {
        // Extract fields to update from req.body
        const { name, email } = req.body; // Add or remove fields based on your User model
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Update the user object
        if (name) user.name = name;
        if (email) user.email = email;
        // Add other fields as necessary

        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
