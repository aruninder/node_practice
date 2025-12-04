const express = require("express");
const app= express()
const port = 2300;

app.get('/',(req,res)=>{
  res.send('home route');
})






app.listen(port,()=>{
  console.log(`server is running on port:${port} `);
  
})