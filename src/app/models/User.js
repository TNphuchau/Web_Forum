const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, default: '' },
    username: { type: String },
    email: { type: String },
    avatar: { type: String, default: 'https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-den.png' },
    password: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
