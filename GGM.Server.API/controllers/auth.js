const User = require('../../GGM.Data.Layer/models/User');


const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email, password:req.body.password})
    res.status(200).json({data:user})
}

const register = async (req,res)=>{
    const user = await User.create(req.body)
    res.status(200).json({data:user})
}

module.exports = {login, register};