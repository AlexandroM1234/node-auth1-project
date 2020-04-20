exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("UserName").notNullable().unique();
    tbl.string("Password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
