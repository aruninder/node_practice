const express= require('express');
const router = express.Router();

//temporary controller logic

const getAllStudents = (req,res)=>{
  res.send("all students fetched successfully");
};

const getSingleStudent=(req, res)=>{
  res.send("get one student");
}

router.get("./all",getAllStudents);
router.get("./single",getSingleStudent);


module.exports=router;