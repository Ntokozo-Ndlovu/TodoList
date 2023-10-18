const jwt = require('jsonwebtoken');


const authenticateMiddleware = (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
    //throw an error
        next(new Error('User not authorized'));
    }    
    const token = authorization.split(' ')[1];
    const decodedData = jwt.decode(token);
    req.userId = decodedData.userId;
    next()
}

module.exports = authenticateMiddleware;