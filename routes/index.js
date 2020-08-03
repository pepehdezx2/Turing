const express = require('express');
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const Lockerdb = require("../models/Locker");
const User = require("../models/User");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome.ejs'));

//Account page
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin
  })
);

// account view
router.get('/account', ensureAuthenticated, (req, res) =>
  res.render('account.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin,
    oscilloscope: req.user.oscilloscope,
    fgenerator: req.user.fgenerator,
    multimeter: req.user.multimeter,
    font: req.user.font
  })
);

// lockers view
router.get('/lockers', ensureAuthenticated, (req, res) =>
  res.render('lockers.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin,
    locker: req.user.locker
  })
);

// locker post function
function hola(d1, d2){
  let d3=d1+d2;
  console.log(d3);
}

// lockers post
router.post('/lockers', ensureAuthenticated, (req, res) =>
  res.render('lockers.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin,
    locker: req.user.locker
  }, hola("a", "b"))
);

// locker post function
function admin(d3){
  var d32=d3.split(" ");
  User.findOneAndUpdate({plate:d32[0]}, {oscilloscope:1}, (err)=>{
  	if(err){
  		throw Error(error);
  	}
  });
}

 /*
  User.findOne({plate: d32[0]}).then(user => {
  	if (!user) {
  		console.log("efe");
  	}
  });
  */

  /*var howmany;
  if(d32[1]==="osciloscopio"){
  	howmany=obj.oscilloscope + 1;
  	User.update({ plate:d32[0] }, {
  		oscilloscope: howmany
  })
  	}
  	else if(d32[1]==="generador"){
  		howmany=obj.fgenerator + 1;
  		User.update({ plate:d32[0] }, {
  			fgenerator: howmany
  })
  	}
  	else if(d32[1]==="multimetro"){
  		howmany=obj.multimeter + 1;
  		User.update({ plate:d32[0] }, {
  			multimeter: howmany
  })
  	}
  	else if(d32[1]==="fuente"){
  		howmany=obj.font + 1;
  		User.update({ plate:d32[0] }, {
  			font: howmany
  })
  	}
  	*/


// admin post
router.post('/admin', ensureAuthenticated, (req, res) =>
  res.render('admin.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin,
  }, admin(req.body.info))
);

// locker rental

//router.post('/lockers', ensureAuthenticated, (req, res) =>{
 /* const isAvailable = true;
  for (let idl = 101; idl < 117; idl++) {
    Locker.findOne({ isAvailable: isAvailable }).then
  }*/

//const available = Locker.findOne({isAvailable:true});
//res.render('lockers.ejs');
// Revisar si hubo respuesta
/*
if (!available){
  // Regresar mensaje
  // ******
}
else {
  const idLocker = available.idl;
  Lockerdb.update({idl:idLocker}, {
    who: req.user.name,
    isAvailable: false
  })
  //actualizar este locker
  //User.update({})
}
*/
//});

// donations view
router.get('/donations', ensureAuthenticated, (req, res) =>
  res.render('donations.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin
  })
);

// reservations view
router.get('/reservations', ensureAuthenticated, (req, res) =>
  res.render('reservations.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin
  })
);

// admin view
router.get('/admin', ensureAuthenticated, (req, res) =>
  res.render('admin.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin
  })
);

module.exports = router;