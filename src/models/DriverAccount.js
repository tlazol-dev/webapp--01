const { Model } = require('objection');


class Driver extends Model {

  static get tableName (){
    return 'drivers_users'
  }


  static get relationMappings(){
    const Journey = require('./Journey.js')

    return {
      
    }
  }

}



module.exports = Driver
