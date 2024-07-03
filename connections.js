const mongoose = require('mongoose');



//connection


async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(()=>console.log("MongoDB Connected"))
    .catch(()=> console.log("Error",err));
}
module.exports={connectMongoDB,};