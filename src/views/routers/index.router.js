const express = require('express');
const router = express.Router();
const indexCtrl = require('../../controllers/index.controller');

router.get('/', indexCtrl.renderIndex);

router.get('/about', indexCtrl.renderAbout);

router.get('/blogs', indexCtrl.renderBlog);

router.get('/blogs/create', indexCtrl.renderCreate);

// ACTIONS

router.get('/add-blog', indexCtrl.addingBlog);

router.get('/all-blogs', indexCtrl.viewBlog);

router.get('/single-blog', indexCtrl.singleBlog);


// POST
router.post('/blogs', indexCtrl.renderBlogPost);

router.get('/blogs/:id', indexCtrl.renderBlogID);

router.delete('/blogs/:id', indexCtrl.renderBlogDelete);

module.exports = router