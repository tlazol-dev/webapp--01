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

  static get relationMappings(){
     const Journey = require('./Journey.js')
     const DriverAccount = require('./DriverAccount.js')

      return {
        "passengerJourneys" : {
          relation: Model.HasManyRelation,
          modelClass: Journey,
          join: {
            from: 'users.id',
            to: 'journeys.passenger_user_id'
          }
        },

        "driverJourneys" : {
          relation: Model.HasManyRelation,
          modelClass: Journey,
          join: {
            from: 'users.id',
            to: 'journeys.driver_user_id'
          }
        },

        "driverAccount" : {
          relation: Model.HasOneRelation,
          modelClass: DriverAccount,
          join: {
            from: 'users.id',
            to: 'drivers_users.driver_user_id'
          }
        }
      }
  }


}



module.exports = User
