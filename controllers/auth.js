const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { NotFoundError, NotAuthorizedError } = require('../errors');
const {StatusCodes} = require('http-status-codes');

const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        throw new NotFoundError('User does not exist')
    }
    if(!user.comparePassword(req.body.password)){
        throw new NotAuthorizedError('Incorrect password')
    }
    const token = user.createToken();
    res.status(StatusCodes.OK).json({ userId:user._id, token});
}

const register = async (req,res)=>{
    const user = await User.create(req.body);
    const token = user.createToken();
    res.status(StatusCodes.CREATED).json({ userId:user._id, token})
}

module.exports = {login, register};