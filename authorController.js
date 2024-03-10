// authorController.js
const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add more controller functions as needed...
