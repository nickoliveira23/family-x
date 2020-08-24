exports.up = function(knex) {
    return knex.schema.createTable('address', function (table) {
        table.increments('id');
        
        table.string('street').notNullable();
        table.integer('number').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.date('uf', 2).notNullable();
        table.string('zip').notNullable();

        table.integer('id_member').notNullable();

        table.foreign('id_member').references('id').inTable('member');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('address');
};
