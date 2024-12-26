// Import the users data from the in-memory data source
const users = require('../data/users');

// Fetch all users
exports.getUsers = (req, res) => {
  // Respond with a 200 status code and the list of users in JSON format
  res.status(200).json(users);
};

// Fetch user by ID
exports.getUserById = (req, res) => {
  // Find the user with the specified ID from the request parameters
  const user = users.find(u => u.id === req.params.id);
  
  // If the user is not found, respond with a 404 status code and an error message
  if (!user) {
    return res.status(404).json({ error: 'User  not found' });
  }
  
  // If the user is found, respond with a 200 status code and the user data in JSON format
  res.status(200).json(user);
};

// Add a new user
exports.addUser  = (req, res) => {
  // Destructure the firstName, lastName, and hobby from the request body
  const { firstName, lastName, hobby } = req.body;
  
  // Create a new user object with a unique ID and the provided data
  const newUser  = { id: `${users.length + 1}`, firstName, lastName, hobby };
  
  // Add the new user to the users array
  users.push(newUser );
  
  // Respond with a 201 status code and the newly created user in JSON format
  res.status(201).json(newUser );
};

// Update a user
exports.updateUser  = (req, res) => {
  // Find the user with the specified ID from the request parameters
  const user = users.find(u => u.id === req.params.id);
  
  // If the user is not found, respond with a 404 status code and an error message
  if (!user) {
    return res.status(404).json({ error: 'User  not found' });
  }
  
  // Destructure the updated data from the request body
  const { firstName, lastName, hobby } = req.body;
  
  // Update the user's properties with the new data
  user.firstName = firstName;
  user.lastName = lastName;
  user.hobby = hobby;
  
  // Respond with a 200 status code and the updated user data in JSON format
  res.status(200).json(user);
};

// Delete a user
exports.deleteUser  = (req, res) => {
  // Find the index of the user with the specified ID from the request parameters
  const index = users.findIndex(u => u.id === req.params.id);
  
  // If the user is not found, respond with a 404 status code and an error message
  if (index === -1) {
    return res.status(404).json({ error: 'User  not found' });
  }
  
  // Remove the user from the users array
  users.splice(index, 1);
  
  // Respond with a 200 status code and a success message
  res.status(200).json({ message: 'User  deleted successfully' });
};