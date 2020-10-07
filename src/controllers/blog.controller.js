const Blog = require('../model/blogs');
const blogCtrl = {};

blogCtrl.addingBlog = (req, res) => {
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

blogCtrl.viewBlog = (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
};

blogCtrl.singleBlog = (req, res) => {
    Blog.findbyId('5f7df34ea96a9b81315acd39')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = blogCtrl;