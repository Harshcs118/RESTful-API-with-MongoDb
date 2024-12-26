// Import the required modules
const express = require('express'); // Import the Express framework
const { getUsers, getUserById, addUser , updateUser , deleteUser  } = require('../controllers/userController'); // Import user controller functions
const validateUser  = require('../middlewares/validateUser'); // Import the user validation middleware

// Create a new router instance
const router = express.Router();

// Define the routes for user-related operations

// Route to fetch all users
router.get('/', getUsers); // Calls the getUsers function when a GET request is made to '/users'

// Route to fetch a user by ID
router.get('/:id', getUserById); // Calls the getUser ById function when a GET request is made to '/users/:id'

// Route to add a new user
router.post('/', validateUser , addUser ); // Calls the validateUser  middleware and then the addUser  function when a POST request is made to '/users'

// Route to update an existing user
router.put('/:id', validateUser , updateUser ); // Calls the validateUser  middleware and then the updateUser  function when a PUT request is made to '/users/:id'

// Route to delete a user
router.delete('/:id', deleteUser ); // Calls the deleteUser  function when a DELETE request is made to '/users/:id'

// Export the router to be used in the main application
module.exports = router;