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
};



// POST
indexCtrl.renderBlogPost = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
}


indexCtrl.renderBlogID = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result });
        })
        .catch((err) => {
            console.log(err);
        })
};


indexCtrl.renderBlogDelete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err)
        });
}
module.exports = indexCtrl;