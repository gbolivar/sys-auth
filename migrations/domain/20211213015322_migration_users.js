exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('name', 70).notNullable();
            table.string('secret', 255).notNullable()
            table.boolean('status').default(true);
            table.timestamp('created_at').defaultTo(knex.fn.now());

            table.comment('Usuarios del sistema ');
            table.unique(['name']);
            table.unique(['secret']);
            table.index(['secret'], 'idx_users_secret', {});
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("users");
};
