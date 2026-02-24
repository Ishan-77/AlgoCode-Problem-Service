const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(err,req,res,next) { // 4 params -> error handler, express has a default error handling middleware as well, added at end of middleware func stack
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success:false,
            message: err.message,
            error:err.details,
            data: {} // since exception no data is going to be provided.
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"Something went wrong",
        error: err,
        data: {}

    });
}


module.exports = errorHandler; // used in index.js