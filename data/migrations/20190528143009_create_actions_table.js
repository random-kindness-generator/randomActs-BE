exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", tbl => {
      tbl.increments();
      tbl.string("action", 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };