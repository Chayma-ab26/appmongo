const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const app =express();
app.use(express.json())

const userRoutes =require('./routes/userroutes');
app.use('/api/auth',userRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to database server')
}).catch(err=>console.log(err))
app.listen(process.env.PORT,()=>{
    console.log('server lestening on port',+process.env.PORT);
}) 
    