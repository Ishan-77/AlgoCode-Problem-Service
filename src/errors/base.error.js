

class BaseError extends Error {
    constructor(name,statusCode, description,details) {
        super(description); // error(message);

        this.name = name;
        this.statusCode = statusCode;
        this.details = details;

        
        

    
    }
}

module.exports = BaseError;