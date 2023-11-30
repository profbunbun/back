const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        // Add validation or constraints if needed
    },
    email: {
        type: String,
        // Add validation or constraints if needed
    },
    password: {
        type: String,
        // Add validation or constraints if needed
    }
}, {
    collection: 'users'
});

// Check if the model already exists and export it, or compile it if not
module.exports = mongoose.models.users || mongoose.model('users', usersSchema);
