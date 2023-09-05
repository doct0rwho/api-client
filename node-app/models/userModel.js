const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  roles: [String], // Roles assigned to the user (e.g., 'admin', 'user')
});

userSchema.plugin(passportLocalMongoose);//conect passport with mongoose

module.exports = mongoose.model('User', userSchema);
