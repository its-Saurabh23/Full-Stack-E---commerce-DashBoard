const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    versionKey:false
});


module.exports = mongoose.model('users',userSchema);