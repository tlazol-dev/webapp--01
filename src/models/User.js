const { Model } = require('objection');
const Password = require('../helpers/auth--objection-password.js')();
const _validateModelFields = require('../helpers/auth--objection-validateModelFields.js')



class User extends Password(Model) {

  static get tableName (){
    return 'users'
  }

  $validate(modelInstance){
    _validateModelFields(modelInstance)
    return modelInstance
  }

}



module.exports = User
