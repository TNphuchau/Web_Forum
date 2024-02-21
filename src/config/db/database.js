// // config/db.js
// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "web_forum"
// });

// module.exports = db;

const mongoose = require('mongoose');

async function connnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_forum');
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failed!!!')
    }
}

module.exports = { connnect };