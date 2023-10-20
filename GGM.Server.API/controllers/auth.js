const User = require('../../GGM.Data.Layer/models/User');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{
    console.log(req.body)
    const user = await User.findOne({email:req.body.email, password:req.body.password});
    if(!user){
     throw new Error('User does not exist')
    }
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({ userId:user._id, token});
    }

const register = async (req,res)=>{
    //we create a user here
    const user = await User.create(req.body);
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({ userId:user._id, token})
}

module.exports = {login, register};