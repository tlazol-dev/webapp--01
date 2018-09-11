const User = require('../models/User.js')

exports.handleRegisterRes = function(req, res){
  const newUser = res.locals.newUser
  const previousUser = res.locals.dbUserFromReq

  if(!newUser){
    return res.status(403).json(req.locals.newUser)
  }

  delete newUser.password
  return res.status(200).json(newUser)
}

exports.handleLoginRes = (req, res)=>{
  res.json(req.user)
}

exports.handleCurrentAuthRes = (req, res)=>{
    const user = req.user || {}
    res.status(200).json(user)
}

exports.handleLogoutRes = (req, res)=>{
    const user = req.user
    req.logout()
    res.status(200).json({loggedOut: true, user})
}

exports.handleUpdateUserEmailRes =  (req, res)=>{
  const user = res.locals.dbUser

  if(user.email === req.body.updated_email){

    return res.status(200).json({
      msg: `'${req.body.email}' is now '${user.email}''`,
      user: user
    })
  } else {
    return res.status(500).send('The user may or may not have update email value')
  }
}


exports.handleUpdateUserPasswordRes = async (req, res)=>{
  const user = res.locals.dbUser
  if(typeof user === 'object'){
    return res.status(200).json({
      msg: `'${req.body.email}' password has been modified`,
      user: user
    })
  } else {
    return res.status(500).send('The user may or may not have update password value')
  }

}
