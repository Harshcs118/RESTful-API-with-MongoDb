// Middleware function for logging HTTP requests
module.exports = (req, res, next) => {
  // Log the current date and time, HTTP method, and request URL
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  // Call the next middleware function in the stack
  next();
};