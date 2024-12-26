// Import the required modules
const express = require('express'); // Import the Express framework
const userRoutes = require('./routes/userRoutes'); // Import user routes from the routes directory
const logger = require('./middlewares/logger'); // Import the logger middleware

// Create an instance of the Express application
const app = express();
const PORT = 3000; // Define the port number for the server

// Middleware
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(logger); // Use the logger middleware to log request details

// Routes
app.use('/users', userRoutes); // Mount the user routes at the '/users' endpoint

// Start the server
app.listen(PORT, () => {
  // Callback function that runs when the server starts
  console.log(`Server running on http://localhost:${PORT}`); // Log the server URL to the console
});