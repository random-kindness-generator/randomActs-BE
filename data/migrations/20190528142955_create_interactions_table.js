exports.up = function(knex, Promise) {
    return knex.schema.createTable("interactions", tbl => {
      tbl.increments();
  
      tbl.string("contact", 255).notNullable();
      tbl.string("action", 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("interactions");
  };