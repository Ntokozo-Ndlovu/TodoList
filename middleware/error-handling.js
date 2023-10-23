const {StatusCodes} = require('http-status-codes');

const errorHandlingMiddleware = (err,req,res,next)=>{  
    const customError = {
        message:err.message|| 'Something bad happened',
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }
    
    if(err.code == 11000){
        customError.message = err.message;
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }

    if(err.name === "CastError"){
        customError.message = err.message;
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }

    if(err.name === "ValidationError"){
        customError.message = Object.keys(err.errors).map(name=>{
            return `Validation error for ${name} reason: ${err.errors[name].kind}`
        }).join(', ');
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    res.status(customError.statusCode).json({message:customError.message});

};



module.exports = errorHandlingMiddleware;