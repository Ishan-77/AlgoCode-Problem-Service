const { StatusCodes } = require("http-status-codes");

const BaseError = require("./base.error");




class NotFoundError extends BaseError {
    constructor(resourceID) {
        super("NotFound",StatusCodes.NOT_FOUND,` resource with ${resourceID} not found`, {});
    }
}

module.exports = NotFoundError;