const  { Model } = require('objection');
const  User  = require ('./User');

class DriverAccount extends Model {

  static get tableName (){
    return 'driver_accounts'
  }


  static get relationMappings(){
    const User = require('./User.js')

    return {
      driverUserAccount : {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join:{
          from: 'driver_accounts.driver_user_id',
          to: 'users.id'
        }
      }
    }
  }
}



module.exports = DriverAccount
