const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
},{
    versionKey:false
});
module.exports = mongoose.model('products',productSchema)