const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'User name required'],
        minlength: 3,
        maxlength:20
    },
    email:{
        type:String,
        required:[true, 'User email required'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email'],
        unique:true 
       },
    password:{
        type:String,
        required:[true, 'Password required'],
        minlength:6
    }
})


module.exports = mongoose.model('User', UserSchema);