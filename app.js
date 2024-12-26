// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import required modules
const express = require('express'); // Import the Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB object modeling
const logger = require('./middlewares/logger'); // Import the logging middleware
const userRoutes = require('./routes/userRoutes'); // Import user routes

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 5000; // Set the port to the value in the environment variable or default to 5000

// Validate environment variables
if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI is not set in the environment variables'); // Log an error if MONGO_URI is not set
    process.exit(1); // Exit the process with a failure code
}

// Middleware
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(logger); // Use the logger middleware to log request details

// Routes
app.use('/api', userRoutes); // Mount user routes at the '/api' endpoint

// MongoDB connection
console.log('Attempting to connect to MongoDB...'); // Log the connection attempt
mongoose.connect(process.env.MONGO_URI) // Connect to MongoDB using the URI from environment variables
    .then(() => console.log('Connected to MongoDB')) // Log success message on successful connection
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error); // Log error if connection fails
        process.exit(1); // Exit the process if MongoDB connection fails
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ message: 'Internal Server Error' }); // Respond with a 500 status code and error message
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log the server start message with the port number
});