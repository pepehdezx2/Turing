const express = require('express');
const router = express.Router();
const path = require("path");

//Login page
router.get('/login', (req, res)=>{
    res.render("login.ejs");
})

//Register page
router.get('/register', (req, res)=>{
    res.render("register.ejs");
})

module.exports=router;