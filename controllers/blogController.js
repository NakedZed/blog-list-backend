const catchAsync = require('../utils/catchAsync');
const Blog = require('../models/blogModel');

//@desc Create a blog
//@route POST /api/v1/blogs/blog
//access PUBLIC
exports.addBlog = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let blog = await Blog.create(req.body);
  res.status(200).json({
    status: 'success',
    blog,
  });
});
//@desc Get  all blogs
//@route GET /api/v1/blogs/
//access PUBLIC
exports.getAllBlogs = catchAsync(async (req, res, next) => {
  let blogs = await Blog.find();
  res.status(200).json({
    status: 'success',
    blogs,
  });
});

//@desc Get a blog  by id
//@route POST /api/v1/blogs/blog/id
//access PUBLIC
exports.getBlogById = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let blog = await Blog.findById({
    _id: id,
  });
  res.status(200).json({
    status: 'success',
    blog,
  });
});

//@desc Delete a blog by id
//@route DELETE /api/v1/blogs/blog/:id
//access PUBLIC
exports.deleteBlogById = catchAsync(async (req, res, next) => {
  let { id } = req.params;

  let deletedBlog = await Blog.findOneAndDelete({ _id: id });

  res.status(200).json({
    status: 'success',
    deletedBlog,
  });
});

//@desc Update a blog by id
//@route Update /api/v1/blogs/blog/:id
//access PUBLIC
exports.upateBlogById = catchAsync(async (req, res, next) => {
  let { id } = req.params;
  let updatedBlog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    updatedBlog,
  });
});
