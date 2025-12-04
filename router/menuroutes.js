const express = require('express');
const router =  express.Router();
const menuItem = require('../models/menumodel');


// post method to add new item  in menu 
router.post('/',async(req,res)=>{
  try{
     const data = req.body;
     const newMenu = new menuItem (data);
     const response=await newMenu.save();
console.log("data saved");
res.status(200).json(response);


  }catch(err){
res.status(500).json({error:"internal server error"});
  }
})


// get method to get the menu items
router.get('/',async(req,res)=>{
 try{
const data= await menu.find();
console.log("data fetched successfully") 
res.status(200).json(data);
  }catch(err){
 res.status(500).json({error:"internal server error"});
  }
})
 module.exports=router;