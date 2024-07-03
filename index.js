const express = require('express');
const fs = require('fs');
const userRouter=require("./routes/student")
const{connectMongoDB}=require("./connections")
const{logRequestResponse}=require("./middleware/midle")

connectMongoDB("mongodb://127.0.0.1:27017/nodeprojrct");


const app=express();
const PORT= 8000;

//middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logRequestResponse("log.txt"));
//routes
app.use("/user",userRouter);


app.listen(PORT, console.log(`Server is running on ${PORT}`) );




