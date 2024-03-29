// app.js
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// Connect MySQL
// const db = require('./config/db/database');
// db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to MySQL!");
// });

//Connect mongooDB
const db = require('./config/db/database');
db.connnect();

// Set up middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/app/views'));

// Liên kết tĩnh để sử dụng css
app.use(express.static(path.join(__dirname, 'public')));

// Route
const route = require('./routes');
route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
