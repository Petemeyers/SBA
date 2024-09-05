require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const things = require("./things.js");
const SECRET_KEY = process.env.SECRET_KEY;

// Example route
app.get("/", (req, res) => {
  res.send(`Secret Key is: ${SECRET_KEY}`);
});
// Middleware and routes
app.use("/things", things);
app.use(express.json()); // For parsing JSON bodies

app.get("/things/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});
// Define a route that handles POST requests
app.post("/data", (req, res) => {
  // Access the parsed JSON data from req.body
  const data = req.body;
  console.log("Received data:", data);

  // Respond with a success message
  res.send("Data received successfully");
});
//Other routes here
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.status(400).send({ error: "Invalid JSON" });
  } else {
    next();
  }
});
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Secret Key: ${SECRET_KEY}`);
});
