exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', (usersTable)=>{
    //primary key
    usersTable.increments()

    //Fields
    usersTable.string('email').notNullable()
    usersTable.string('password').notNullable()

    return usersTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
