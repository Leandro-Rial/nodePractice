const express = require('express');
const app = express();
const path = require('path');

// SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server Working', port)
});

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ROUTERS
app.use('/', require('./views/routers/blog.router'));


// MIDDELWARE & STATIC
app.use((req, res, next) => {
    res.status(404).render('404');
});

//app.use(express.static(path.join(__dirname, 'public')));