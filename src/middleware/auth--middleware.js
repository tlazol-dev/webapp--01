const handleDbError = require('../helpers/handleDbError.js')
const User = require('../models/User.js')

exports.authenticatePasswordField = (pwField='password') => {
  return async (req, res, next)=>{
    const user = res.locals.dbUser

    if(typeof user === 'undefined') {
      return next()
    }

    try {
      const isValidPassword = await user.verifyPassword(req.body[pwField] )

      if(!isValidPassword) return res.status(403).send('403 - Unauthorized')

      return next()
    } catch(err) {
      handleDbError(res,err)
    }
  }
}

exports.getUserFromDb = (bodyProperty='email')=>{

    return async (req, res, next) => {
      const reqBody = req.body

      try {
        const user = await User
          .query()
          .first()
          .where({ email: reqBody[bodyProperty] })
          .returning('*')

        res.locals.dbUser = user

        return next()

      } catch (err){
        return handleDbError(res, err)
      }

    }

}


exports.updateUser = (updateColumn='email')=>{

  let patchObject = {}

  return async (req, res, next)=>{

    switch (updateColumn) {
      case 'email' :
        patchObject = {email: req.body.updated_email, password: req.body.password }
        break;

      case 'password':
        patchObject = {email: req.body.email, password: req.body.updated_password }
        break;

      default:
        // no op
    }

    try {

      if(!res.locals.dbUser){
        res.status(400).send("403 - Requested User Does Not Exist")
      }

      const userFromReq = res.locals.dbUser
      const updatedUserRecord = await userFromReq.$query()
        .patchAndFetchById(userFromReq.id, patchObject )

      res.locals.dbUser = updatedUserRecord

      return next()

    } catch (err){
      handleDbError(res, err)
    }

  }
}


exports.res403ForExistingUser = async (req, res, next)=>{

  try {

    if(res.locals.dbUser){
      return res.status(403).send('403 - User Already Exists')
    }

    return next()

  } catch (err){
    handleDbError(res, err)
  }

}


exports.saveNewUser = async (req, res, next)=>{

  try {

    const newUser = await User
      .query()
      .insert(req.body)
      .returning('*')

    res.locals.newUser = newUser

    return next()

  } catch (err){
    handleDbError(res, err)
  }

}


exports.removeUserPasswordFromRes = (req, res, next)=>{
  try {

    const user = res.locals.dbUser

    if(typeof user === 'object' && typeof user.password !== 'undefined'){
      delete user.password
    }

    res.locals.dbUser = user

    return next()

  } catch (err){
    handleDbError(res, err)
  }
}
