const express = require('express');
const router = express.Router();
const blogCtrl = require('../../controllers/blog.controller');

router.get('/add-blog', blogCtrl.addingBlog);

router.get('/all-blogs', blogCtrl.viewBlog);

router.get('/single-blog', blogCtrl.singleBlog)

module.exports = router