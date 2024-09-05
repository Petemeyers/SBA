const User = require("../models/user");

const users = []; // This will act as your in-memory "database" for now

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Create a new user
exports.createUser = (req, res) => {
  const { id, name, email } = req.body;
  const user = new User(id, name, email);
  users.push(user);
  res.status(201).json(user);
};

// Other CRUD operations...
