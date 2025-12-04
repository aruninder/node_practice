const express = require('express');
const router= express.Router();


// i can go define routes using this router

router.get("/",(req, res)=>{
  res.send("all users");
})

module.exports = router;