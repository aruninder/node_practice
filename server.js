const express = require('express')
const app = express()
const connectDB = require('./db')
connectDB();
app.use(express.json());  //body parser middlewear
const port = 7000

// model import
const menu = require('./models/menumodel');
const menuItem = require('./models/menumodel');

//import the router files
const personroutes = require("./router/personroutes");
app.use('/person',personroutes);

 // import the menu items router files

 const menuroutes = require("./router/menuroutes")
 app.use('/menu',menuroutes);




//comment added for testing purpose

































app.listen(port,()=>{
console.log(`server started on port: ${port}`);

})