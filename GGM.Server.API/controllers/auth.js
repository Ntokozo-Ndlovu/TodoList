const User = require('../../GGM.Data.Layer/models/User');
const jwt = require('jsonwebtoken');

const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email, password:req.body.password});
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({token})
}

const register = async (req,res)=>{
    //we create a user here
    const user = await User.create(req.body);
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({token})
}

module.exports = {login, register};