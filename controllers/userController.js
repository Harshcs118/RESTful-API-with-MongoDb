// Import the User model
const User = require('../models/user');

// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();
        // Respond with a 200 status code and the list of users in JSON format
        res.status(200).json(users);
    } catch (error) {
        // If an error occurs, respond with a 500 status code and an error message
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Fetch user by ID
exports.getUserById = async (req, res) => {
    try {
        // Retrieve a user by ID from the database
        const user = await User.findById(req.params.id);
        // If the user is not found, respond with a 404 status code and an error message
        if (!user) return res.status(404).json({ message: 'User  not found' });
        // Respond with a 200 status code and the user data in JSON format
        res.status(200).json(user);
    } catch (error) {
        // If an error occurs, respond with a 500 status code and an error message
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// Add a new user
exports.addUser  = async (req, res) => {
    try {
        // Create a new user instance with the data from the request body
        const newUser  = new User(req.body);
        // Save the new user to the database
        await newUser .save();
        // Respond with a 201 status code and a success message along with the new user data
        res.status(201).json({ message: 'User  added successfully', user: newUser  });
    } catch (error) {
        // If an error occurs (e.g., validation error), respond with a 400 status code and an error message
        res.status(400).json({ message: 'Error adding user', error });
    }
};

// Update user by ID
exports.updateUser  = async (req, res) => {
    try {
        // Update the user by ID with the data from the request body
        const updatedUser  = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        // If the user is not found, respond with a 404 status code and an error message
        if (!updatedUser ) return res.status(404).json({ message: 'User  not found' });
        // Respond with a 200 status code and a success message along with the updated user data
        res.status(200).json({ message: 'User  updated successfully', user: updatedUser  });
    } catch (error) {
        // If an error occurs (e.g., validation error), respond with a 400 status code and an error message
        res.status(400).json({ message: 'Error updating user', error });
    }
};

// Delete user by ID
exports.deleteUser  = async (req, res) => {
    try {
        // Delete the user by ID from the database
        const deletedUser  = await User.findByIdAndDelete(req.params.id);
        // If the user is not found, respond with a 404 status code and an error message
        if (!deletedUser ) return res.status(404).json({ message: 'User  not found' });
        // Respond with a 200 status code and a success message
        res.status(200).json({ message: 'User  deleted successfully' });
    } catch (error) {
        // If an error occurs, respond with a 500 status code and an error message
        res.status(500).json({ message: 'Error deleting user', error });
    }
};