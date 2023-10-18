require('dotenv').config()
const express = require('express');

const {connectDB} = require('./GGM.Data.Layer');
//import middlewares

const {notFoundMiddleware} = require('./GGM.Server.Middleware');

const { authRouter, todoRouter} = require('./GGM.Server.API');
//lets set some middleware stuffs, json use and notfound page
const app = express();
app.use(express.json());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/todo',todoRouter);


app.use(notFoundMiddleware);


const PORT = process.env.PORT || 3005 ;

const start = ()=>{
    try{
        connectDB(process.env.DATABASE_CONNECTION);
        app.listen(PORT,()=>{
            console.log(`Server has started: ${PORT}`)
        })
    }
    catch(err){
        console.log('Error: ', err)
    }
 
     
}


start();