const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({

    Username  : String,
    Password  : String,
    Name      : String,
    Email     : String,
    AdminRole : String,
    Add       : Boolean,
    Edit      : Boolean,
    Delete    : Boolean

});

var SignUpData = mongoose.model('signupdata', SignUpSchema);

module.exports = SignUpData;