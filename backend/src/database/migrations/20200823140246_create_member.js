exports.up = function (knex) {
    return knex.schema.createTable('member', function (table) {
        table.increments('id');

        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('situation').notNullable();
        table.date('birth').notNullable();
        table.string('rg').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('member');
};
