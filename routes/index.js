const express = require('express');
const router = express.Router();
const path = require("path");
const Lockerdb = require("../models/Locker");
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
    isAdmin: req.user.isAdmin
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

// lockers post
router.post('/lockers', ensureAuthenticated, (req, res) =>
  res.render('lockers.ejs', {
    name: req.user.name,
    isAdmin: req.user.isAdmin,
    locker: req.user.locker
  })
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