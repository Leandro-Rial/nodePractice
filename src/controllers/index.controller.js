const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderContact = (req, res) => {
    res.render('contact')
};

module.exports = indexCtrl;