// app.js
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// Connect MySQL
const db = require('./config/db/database');
db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/app/views'));

// Route
const routes = require('./routes/index');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
