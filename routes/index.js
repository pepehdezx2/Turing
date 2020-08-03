const express = require('express');
const router = express.Router();
const path = require("path");
const Locker = require("../models/Locker");
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
    name: req.user.name,
    locker: req.user.locker
  })
);

// locker rental

/*router.post('/lockers', (req, res) =>{
  const isAvailable = true;
  for (let idl = 101; idl < 117; idl++) {
    Locker.findOne({ isAvailable: isAvailable }).then
  }
});


router.post('/register', (req, res) => {
  const name = req.body.nombre;
  const email = req.body.mail;
  const plate = req.body.mat;
  const major = req.body.carrera;
  const password = req.body.password;
  const password2 = req.body.password2;
  let errors = [];

  if (!name || !email || !plate || !major || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (plate.length < 9) {
    errors.push({ msg: 'Plate must include A or LC' });
  }

  if (plate.length == 10){
    isAdmin = true;
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      plate,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          plate,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          plate,
          major,
          password,
          isAdmin
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'Ya estas registrado puedes acceder'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});
*/


// donations view
router.get('/donations', ensureAuthenticated, (req, res) =>
  res.render('donations.ejs', {
    name: req.user.name
  })
);

// reservations view
router.get('/reservations', ensureAuthenticated, (req, res) =>
  res.render('reservations.ejs', {
    name: req.user.name
  })
);

module.exports = router;