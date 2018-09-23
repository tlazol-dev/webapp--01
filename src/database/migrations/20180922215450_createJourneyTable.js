
exports.up = async function(knex, Promise) {

return knex
.schema
.createTable('journeys', (journeysTable)=>{
   journeysTable.increments('id')


   journeysTable.integer('passenger_user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')

  journeysTable.date('driver_accepted_at')
  journeysTable.date('journey_initiated_at')
  journeysTable.date('journey_terminated_at')
  journeysTable.integer('costo').notNullable()
  journeysTable.decimal("distancia", 3)
  journeysTable.string('route_image_link')
  journeysTable.timestamps(true, true)



   journeysTable.integer('driver_user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('cascade')
      .onDelete('cascade')

      return journeysTable
    })
};


exports.down = async function(knex, Promise) {

  const table2 = await knex.schema.hasTable("journeys")

  if (table2) {
    await knex.schema.table('journeys', (journeysTable)=>{
      journeysTable.dropForeign('passenger_user_id')
      journeysTable.dropColumn('passenger_user_id')
      journeysTable.dropForeign('driver_user_id')
      journeysTable.dropColumn('driver_user_id')
    })
  }

  await knex
      .schema
      .dropTableIfExists('journeys')

  return knex
};
