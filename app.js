const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(authorRoutes);
app.use(blogRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/9aaya/GYEqewtyd629', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
