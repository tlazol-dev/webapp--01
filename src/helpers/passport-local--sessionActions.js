const User = require('../models/User.js')


exports.configSerializeUser = function( config={} ) {
  return function(user, done){
    done(null, user.id)
  }
}

exports.configDeserializeUser = function( config={} ) {
  return async function(userId, done){
    try {
      const usr = await User
        .query()
        .findById(userId)
        .returning('*')

      if(usr) delete usr.password

      done(null, usr || {} )

    } catch (err) {
      done(err)
    }
  }
}
