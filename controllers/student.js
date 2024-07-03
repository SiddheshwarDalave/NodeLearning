
const StudentDB =require("../models/student");


async function handleGetAllStudents(req,res){
    const students=await StudentDB.find({});
    return res.status(200).json(students);
}

async function handleCreateStudent(req,res){
    const body=req.body;

    if(!body || !body.name || !body.school || !body.class || !body.marks){
        return res.status(400).json({msg:"All fields are required..!"})
    }
    
    const newStudent= await StudentDB.create({
       name:body.name,
        school:body.school,
        class:body.class,
        marks:body.marks,
    })
    console.log(newStudent);

    return res.status(201).json(newStudent);
}

async function handleDeleteAllStudent(req,res){
    await StudentDB.deleteMany({});
    return res.status(200).json({msg: "Deleted All"});
}

async function handlegetStudentByID(req,res){
    const student=await StudentDB.findById(req.params.id);
    console.log(student);
    return res.status(200).json({Received:student});
}

async function handleUpdateStudentByID(req,res){
    const updatedStudent=await StudentDB.findByIdAndUpdate(req.params.id, req.body);
    const student=await StudentDB.findById(req.params.id);
    console.log(student)
    return res.status(200).json(student);
}

async function handleDeleteStudentById(req,res){
    await StudentDB.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"Deleted"});
}

module.exports={handleGetAllStudents,handleCreateStudent,handleDeleteAllStudent,
    handlegetStudentByID,handleUpdateStudentByID,handleDeleteStudentById}