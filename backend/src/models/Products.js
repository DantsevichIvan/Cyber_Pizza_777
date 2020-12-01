const {Schema, model} = require('mongoose');

const productsSchema = new Schema({
    name:{type:String},
    price:{type:Number},
    description:{type:String},
    weight:{type:Number},
    image:{type:String},
    category:{ref: 'Categories'}
})

module.exports = model('Products', productsSchema)
