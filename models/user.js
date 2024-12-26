// Import the mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    // Define the firstName field as a required string
    firstName: { type: String, required: true },
    // Define the lastName field as a required string
    lastName: { type: String, required: true },
    // Define the hobby field as a required string
    hobby: { type: String, required: true }
}, { timestamps: true }); // Enable timestamps for createdAt and updatedAt fields

// Export the User model based on the user schema
module.exports = mongoose.model('User ', userSchema);