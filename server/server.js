const express=require('express');
const dotenv=require('dotenv').config();
const mongoose= require ('mongoose');
const dbConnect = require ('./configs/db');
const Userdatabase= require ('./models/userModel')
const userRoute= require ('./routes/userRoutes')
const app = express();

// middleware
app.use(express.json());

//routes
app.use(`${process.env.USER_ROUTE}`, userRoute);



// server start
app.listen(process.env.PORT, ()=>
    console.log(`this server is running on ${process.env.PORT}`)
)