const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email:{type:String},
    password:{type:String},
    name:{type:String},
    isAdmin:{type:Boolean},
})

module.exports = model('User', userSchema)
