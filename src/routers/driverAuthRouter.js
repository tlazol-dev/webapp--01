const passport = require('passport')

let Router = require('express').Router;
let User = require('../models/User.js')
const {
  getUserFromDb,
  saveNewUser,
  updateUsername,
  res403ForExistingUser,
  authenticatePasswordField,
  updateUser,
  removeUserPasswordFromRes
} = require('../middleware/auth--middleware.js')

const {
  handleRegisterRes,
  handleCurrentAuthRes,
  handleLogoutRes,
  handleLoginRes,
  handleUpdateUserEmailRes,
  handleUpdateUserPasswordRes
} = require('../controllers/authController.js')

// let {registerUser, getCurrentUser, logoutUser, authenticateUser } = require('../controllers/authController.js')(User)
const authRouter = Router()

authRouter
  .post('/login',
    passport.authenticate('local'),
    handleLoginRes
  )
  .post('/register',
    getUserFromDb('email'),
    res403ForExistingUser,
    saveNewUser,
    handleRegisterRes
  )
  .get('/current', handleCurrentAuthRes)
  .post('/logout', handleLogoutRes)
  .put('/update/useremail',
    getUserFromDb('updated_email'),
    res403ForExistingUser,
    getUserFromDb('email'),
    authenticatePasswordField('password'),
    updateUser('email'),
    removeUserPasswordFromRes,
    handleUpdateUserEmailRes
  )
  .put('/update/userpassword',
    getUserFromDb('email'),
    authenticatePasswordField('password'),
    updateUser('password'),
    authenticatePasswordField('updated_password'),
    removeUserPasswordFromRes,
    handleUpdateUserPasswordRes
  )


module.exports = authRouter
