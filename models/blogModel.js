const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = new mongoose.model('Blog', blogSchema);
module.exports = Blog;
