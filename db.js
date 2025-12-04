const mongoose= require('mongoose');
require('dotenv').config();
// define the momgodb connection url

// const mongoUrl ='mongodb://localhost:27017/practice'   // loacal mongodb compass
const mongoUrl= process.env.db;

//setup mongodb connection
const connectDB = async()=>{
  try{
await
mongoose.connect(mongoUrl,{
});
console.log('Mongodb connected successfully');
  }
  catch(err){
    console.log('Mongodb connection failed', err)
    process.exit(1);
}
  }
  module.exports=connectDB;