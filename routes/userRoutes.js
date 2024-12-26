// Import the required modules
const express = require('express'); // Import the Express framework
const userController = require('../controllers/userController'); // Import the user controller functions
const validateUser  = require('../middlewares/validateUser'); // Import the user validation middleware

// Create a new router instance
const router = express.Router();

// Define routes for user-related operations

// Route to fetch all users
router.get('/users', userController.getAllUsers); // Calls the getAllUsers function when a GET request is made to '/users'

// Route to fetch a user by ID
router.get('/users/:id', userController.getUserById); // Calls the getUser ById function when a GET request is made to '/users/:id'

// Route to add a new user
router.post('/user', validateUser , userController.addUser ); // Calls the validateUser  middleware and then the addUser  function when a POST request is made to '/user'

// Route to update an existing user
router.put('/user/:id', validateUser , userController.updateUser ); // Calls the validateUser  middleware and then the updateUser  function when a PUT request is made to '/user/:id'

// Route to delete a user by ID
router.delete('/user/:id', userController.deleteUser ); // Calls the deleteUser  function when a DELETE request is made to '/user/:id'

// Export the router to be used in the main application
module.exports = router;