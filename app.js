const express = require('express');
const cors = require('cors');
const compression = require('compression');
const blogRouter = require('./routes/blogRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
//Implement cors and compression
app.use(cors());
app.use(compression());

app.use('/api/v1/blogs', blogRouter); //Request will hit this first and then match with one of blogRouter.

module.exports = app;
