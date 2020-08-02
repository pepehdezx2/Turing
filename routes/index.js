const express = require('express');
const router = express.Router();
const path = require("path");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Welcome page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome.ejs'));

//Account page
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard.ejs', {
    name: req.user.name
  })
);

// account view
router.get('/account', ensureAuthenticated, (req, res) =>
  res.render('account.ejs', {
    name: req.user.name
  })
);

// lockers view
router.get('/lockers', ensureAuthenticated, (req, res) =>
  res.render('lockers.ejs', {
    name: req.user.name
  })
);

// donations view
router.get('/donations', ensureAuthenticated, (req, res) =>
  res.render('donations.ejs', {
    name: req.user.name
  })
);

// donations view
router.get('/reservations', ensureAuthenticated, (req, res) =>
  res.render('reservations.ejs', {
    name: req.user.name
  })
);

module.exports = router;