const express = require('express');
const StudentDB =require("../models/student");

const router=express.Router();
const {handleGetAllStudents,handleCreateStudent,
    handleDeleteAllStudent,handlegetStudentByID,handleUpdateStudentByID,handleDeleteStudentById} =require("../controllers/student")

// 1. Create Student -> Post Method -> URL-> /api/student




router.route("/")
.get(handleGetAllStudents)
.post(handleCreateStudent)
.delete(handleDeleteAllStudent)

// using route here GET PATCH DELETE Method URL-/api/student/:id

router.route("/:id")
.get(handlegetStudentByID)
.patch(handleUpdateStudentByID)
.delete(handleDeleteStudentById)


module.exports=router;

