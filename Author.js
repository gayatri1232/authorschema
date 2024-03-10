const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Basic email validation regex
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
