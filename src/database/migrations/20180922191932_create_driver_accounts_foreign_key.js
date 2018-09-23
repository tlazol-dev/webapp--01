exports.up = function(knex, Promise) {
  return knex.schema.table('driver_accounts', (table)=>{
    table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .onUpdate('cascade')

    return table
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('driver_accounts', (table)=>{
    table.dropForeign('user_id')
    table.dropColumn('user_id')

    return table
  })
};
