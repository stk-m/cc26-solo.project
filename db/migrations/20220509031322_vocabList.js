/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("vocab_list", function(table) {
        table.increments("id").primary();
        table.string("eng", 32).notNullable();
        table.string("jpn", 32).notNullable();
      })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("vocab_list");
};
