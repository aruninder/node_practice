const express = require('express');
const router= express.Router();

const Person =require("../models/personmodel");


//post route to add a person
router.post("/",async(req,res)=>{
  try{
    //asuming the request body conatians the person data
    const data = req.body;


    // create a new person document usinng the mongoose model
    const newPerson = new Person(data);

// save the new person to the data base
const response=await newPerson.save();
console.log("data saved");
res.status(200).json(response);
  }catch(err){
    console.log(err)
    res.status(500).json({error:"internal server error"});
  }
});


// get method to get the person 


router.get("/",async(req, res)=>{
  try{
const data= await Person.find();
console.log("data fetched successfully") 
res.status(200).json(data);
  }catch(err){
 res.status(500).json({error:"internal server error"});
  }
})


// parameterized  api calls 

router.get("/:worktype",async(req,res)=>{
  try{
const workType = req.params.worktype;  //EXTRACT THE WORKTYPE FROM THE URL PARAMETER
if(workType==chef|| workType=='manager'||workType=='waiter'){

  const response= await person.find({workType});
  console.log('response fetched');
  
} else{
  res.status(400).json({error:'invalid worktype'});
}

  }catch(err){
console.log(error);
res.status(500).json({error:'invalid work type'});

  }
})

// update operation

router.put('/:id',async(req,res)=>{
  try{
const personId= req.params.id;  //extract the id from the url parameter
const updatedPersonData = req.body; //updated data for the person
const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
  new:true,
  runValidators:true,
})


if(!response){
  return res.status(404).json({error:"person not found"})
}


console.log("data updated");
res.status(200).json(response);


  }catch(err){
res.status(500).json({error:"internal server error"})
  }
})



// delete method

router.delete('./:id',async(req,res)=>{
  try{
const personId = req.params.id; // extract the peron id from the peron id url

const response = await Person.findByIdAndDelete(personId);
if(!response){
  return res.status(404).json({error:"person not found"});
}
console.log("data deleted");
res.status(200).json({message:"peson delted sucessfully"})


  }catch(err){
console.log(error);
res.status(500).json({err:"internal server error"});

  }
})











module.exports=router;

