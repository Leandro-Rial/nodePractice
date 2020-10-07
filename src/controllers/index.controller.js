const Blog = require("../model/blogs");

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.redirect('/blogs')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderCreate = (req, res) => {
    res.render('create')
};

indexCtrl.renderBlog = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = indexCtrl;