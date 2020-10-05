const express = require('express');
const router = express.Router();
const indexCtrl = require('../../controllers/index.controller')

router.get('/', indexCtrl.renderIndex);

router.get('/about', indexCtrl.renderAbout);

router.get('/contact', indexCtrl.renderContact)

module.exports = router