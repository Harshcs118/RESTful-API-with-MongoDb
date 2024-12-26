// Middleware for logging HTTP requests
module.exports = (req, res, next) => {
  // Log the HTTP method, request URL, and response status code
  console.log(`${req.method} ${req.url} - ${res.statusCode}`);
  
  // Call the next middleware function in the stack
  next();
};
