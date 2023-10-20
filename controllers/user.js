const User = require('../models/User');

const getUser = async (req,res)=>{
    const userId = req.userId;
    const user = await User.findOne({_id:userId}).select('-_id name surname email');
    if(!user){
        throw new Error('User does not exists');
    }
    res.status(200).json({user})
}

const updateUser = async (req,res)=>{
    const userId = req.userId;
    const {name,surname} = req.body;
    const user = await User.findOneAndUpdate({_id:userId},{name,surname},{new:true, runValidator:true}).select('-_id name surname email');
    if(!user){
        throw new Error('User doesnt exist');
    }
    res.status(200).json({user})
}

module.exports = {getUser,updateUser};