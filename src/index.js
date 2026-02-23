

const express = require('express')

const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

// if any req comes to api we map it to apiRouter
app.use('/api',apiRouter);


app.get('/ping',(req,res)=> {
    return res.json({message:'Problem service is up'});
})


app.listen(PORT,()=> {

    console.log(`Server started at PORT: ${PORT}` );

}) 