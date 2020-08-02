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

module.exports = router;