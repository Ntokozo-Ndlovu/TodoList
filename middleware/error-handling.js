const {StatusCodes} = require('http-status-codes');

const errorHandlingMiddleware = (err,req,res,next)=>{
    const customError = {
        message:err.message|| 'Something bad happened',
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }
    res.status(customError.statusCode).json({message:customError.message})
};

module.exports = errorHandlingMiddleware;