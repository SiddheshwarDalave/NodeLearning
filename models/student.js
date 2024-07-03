const mongoose = require('mongoose');

// Schemma
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    school:{
        type:String,
    },
    class:{
        type:String,
    },
    marks:{
        type:Number
    },
    
},
{timestamps:true}
)

//defined model
const StudentDB =mongoose.model('student', studentSchema);

module.exports=StudentDB;