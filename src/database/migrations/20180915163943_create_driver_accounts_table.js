exports.up = async function(knex, Promise) {
    // await knex.schema.dropTableIfExists('drivers_users')

    return knex
    .schema
    .createTable('driver_accounts', (table)=>{

      table.increments();

      table.string('vehicle_make')
      table.string('vehicle_name')
      table.string('vehicle_licplates')
      table.string('driver_license')
      table.boolean('criminal_record')
      table.boolean('behavior_test')
      table.boolean('certification_test')
      table.boolean("active")
      table.boolean("approved")
      table.timestamps(true, true)

      return table
    })
};

exports.down = async function(knex, Promise) {
  return knex.schema.dropTableIfExists('driver_accounts')
};
