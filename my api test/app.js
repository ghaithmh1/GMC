require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route.js');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log("Problem connecting to the database:", err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});      

app.get("/", (req, res) => {
  res.send("Hello, I'm the API");
});
