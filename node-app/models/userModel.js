const {Schema , model} = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: String,
    password: String,
    roles: [String],
  }); // Specify the collection name here

User.plugin(passportLocalMongoose);//conect passport with mongoose

module.exports = model('User', User);
