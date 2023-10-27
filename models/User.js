const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'User name required'],
        minlength: 3,
        maxlength:20
    },
    surname:{
        type:String,
        minlength:3,
        maxlength:20
    },
    username:{
        type:String,
        minlength:3,
        maxlength:20,
        unique:[true,'Username must be unique'],
        required:[true,'Username required']
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

UserSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
UserSchema.methods.createToken = function (){
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn:Number(process.env.JWT_EXPIRATION)})
}

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User', UserSchema);