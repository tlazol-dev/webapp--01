const { Model } = require('objection');


class Journey extends Model {

   static get tableName (){
     return 'journeys'
   }

   static get relationMappings(){
     const User = require('./User.js')

     return {
       driverUser :{
         relation: Model.BelongsToOneRelation,
         modelClass: User,
         join: {
           from: 'journeys.driver_user_id',
           to: 'users.id'
         }
       },

       passengerUser : {
         relation: Model.BelongsToOneRelation,
         modelClass: User,
         join: {
           from: 'journeys.passenger_user_id',
           to: 'users.id'
         }
       },


     }
   }
}

module.exports = Journey
