const login = (req,res)=>{
    res.status(200).send('Login working')
}

const register = (req,res)=>{
    res.status(200).send('Register working')
}

module.exports = {login, register};