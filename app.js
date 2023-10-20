require('dotenv').config()
const express = require('express');

const {connectDB} = require('./db');
//import middlewares
const cors = require('cors');
const {notFoundMiddleware,authenticateMiddleware} = require('./middleware');

const { authRouter, todoRouter, userRouter} = require('./routes');
//lets set some middleware stuffs, json use and notfound page
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',authenticateMiddleware,userRouter);
app.use('/api/v1/todo',authenticateMiddleware,todoRouter);


app.use(notFoundMiddleware);


const PORT = process.env.PORT || 3005 ;

const start = async ()=>{
    try{
        await connectDB(process.env.DATABASE_CONNECTION);
        app.listen(PORT,()=>{
            console.log(`Server has started: ${PORT}`)
        })
    }
    catch(err){
        console.log('Error: ', err)
    }
 
     
}


start();