

const express = require('express')

const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const mongoose = require('mongoose');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

// if any req comes to api we map it to apiRouter
app.use('/api',apiRouter);


app.get('/ping',(req,res)=> {
    return res.json({message:'Problem service is up'});
})

// last middleware if any error comes
app.use(errorHandler); // registered after all requests


app.listen(PORT, async ()=> {

   

    console.log(`Server started at PORT: ${PORT}` );


     await connectToDB();
    
    

    console.log("Connected to DB Successfully....");


    // testing purpose only

    


   
 

}) 