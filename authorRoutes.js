// authorRoutes.js
const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// Define routes for authors
// Example: GET /authors
router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find({});
    res.send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add more routes as needed...

module.exports = router;
