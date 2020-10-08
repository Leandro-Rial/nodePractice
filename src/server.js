const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

// CONNECT TO DATABASE
const dbUri = 'mongodb+srv://blog-english:h9xbkk1VwMc273Lq@cluster0.vzdjj.mongodb.net/node-english?retryWrites=true&w=majority'

mongoose.connect(dbUri, 
    { useNewUrlParser : true, useUnifiedTopology: true })
    .then((result) => console.log('CONNECTED TO DATABASE'))
    .catch((err) => console.log(err))

// SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server Working', port)
});

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ROUTERS
app.use('/', require('./views/routers/index.router'));


// MIDDELWARE & STATIC
app.use((req, res, next) => {
    res.status(404).render('404');
});
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));