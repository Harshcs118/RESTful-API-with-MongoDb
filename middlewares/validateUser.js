// Middleware for validating user input
module.exports = (req, res, next) => {
  // Destructure the required fields from the request body
  const { firstName, lastName, hobby } = req.body;

  // Check if any of the required fields are missing
  if (!firstName || !lastName || !hobby) {
      // If any required field is missing, respond with a 400 status code and an error message
      return res.status(400).json({ message: 'Missing required fields: firstName, lastName, and hobby are required' });
  }

  // If all required fields are present, call the next middleware function in the stack
  next();
};