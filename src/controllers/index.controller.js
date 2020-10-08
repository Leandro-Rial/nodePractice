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


// ACTIONS
indexCtrl.addingBlog = (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

indexCtrl.viewBlog = (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
};

indexCtrl.singleBlog = (req, res) => {
    Blog.findbyId('5f7df34ea96a9b81315acd39')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}


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