const mongoose= require('mongoose');

// define the momgodb connection url

const mongoUrl ='mongodb://localhost:27017/practice'

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