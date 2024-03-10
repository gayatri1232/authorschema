// blogController.js
const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add more controller functions as needed...
