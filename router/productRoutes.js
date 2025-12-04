const express =require ('express');
const router = express.Router();

// controller logic




//finction define


const getAllProducts= (req,res)=>{
  res.send("all products fetched sucessfully");
}

const createProducts= (req,res)=>{
  res.send("products created sucessfully");
}
// routes deffine 

router.get("/all",getAllProducts);
router.get("/create",createProducts);

// export router
module.exports= router;