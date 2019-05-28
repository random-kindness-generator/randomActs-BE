exports.up = function(knex, Promise) {
    return knex.schema.createTable("contacts", tbl => {
      tbl.increments();
  
      tbl.string("name", 255).notNullable();
      tbl.string("phone", 255);
      tbl.string("email", 255).notNullable();
      tbl.string("password", 255).notNullable();
      tbl.string("address", 500);
      tbl.string("user", 255).notNullable();
      tbl.string("group", 255);
      tbl.string("notes", 500);

      tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("contacts");
  };