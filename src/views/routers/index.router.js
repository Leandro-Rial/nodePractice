const express = require('express');
const router = express.Router();
const indexCtrl = require('../../controllers/index.controller');

router.get('/', indexCtrl.renderIndex);

router.get('/about', indexCtrl.renderAbout);

router.get('/blogs', indexCtrl.renderBlog);

router.get('/blogs/create', indexCtrl.renderCreate);


module.exports = router