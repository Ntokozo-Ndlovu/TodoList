const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { NotFoundError } = require('../errors');
const {StatusCodes} = require('http-status-codes');

const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email, password:req.body.password});
    if(!user){
        throw new NotFoundError('User does not exist')
    }
    const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:'30d'});
    res.status(StatusCodes.OK).json({ userId:user._id, token});
    }

const register = async (req,res)=>{
    const user = await User.create(req.body);
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    
    res.status(StatusCodes.CREATED).json({ userId:user._id, token})
}

module.exports = {login, register};