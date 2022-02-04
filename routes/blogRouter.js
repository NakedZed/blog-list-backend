const express = require('express');
const router = express.Router(); //We created sub application for blogs

const {
  addBlog,
  getBlogById,
  deleteBlogById,
  getAllBlogs,
  upateBlogById,
} = require('../controllers/blogController');

router.route('/blog').post(addBlog);

router
  .route('/blog/:id')
  .get(getBlogById)
  .delete(deleteBlogById)
  .patch(upateBlogById);

router.route('/').get(getAllBlogs);
module.exports = router;
