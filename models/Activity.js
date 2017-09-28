var mongoose = require('mongoose');

module.exports = mongoose.model('Activity',{
    name: String,
    description : String,
    imagepath : String,
    price : Number
});
