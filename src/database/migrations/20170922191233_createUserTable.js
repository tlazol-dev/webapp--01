exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (table)=>{
    //primary key
    table.increments()

    //Fields
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('telefono').notNullable()
    table.string('register_image_link')
    table.string('profile_image_link')
    
    return table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
