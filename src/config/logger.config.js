

const winston = require('winston');


const allowedTransports = []


//logging in Console
allowedTransports.push(new winston.transports.Console({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ // defining format for timestamp
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
         winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// logging in File
allowedTransports.push(new winston.transports.File( {
    filename: 'app.log'

}))

const logger = winston.createLogger( {
    format:winston.format.combine(

         

        winston.format.timestamp({ // defining format for timestamp
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`) // what is going to printed in log
    ),
    transports:allowedTransports
});


module.exports  = logger;