
exports.up = function (knex) {
    return knex.schema
        .createTable('tokens', function (table) {
            table.increments('id');
            table.string('access_token', 250).notNullable()
            table.timestamp('access_token_expires_at').nullable();
            table.biginteger('user_id').notNullable();
            table.biginteger('app_id').notNullable();
            table.boolean('status').default(true);
            table.timestamp('created_at').defaultTo(knex.fn.now());

            table.comment('Token asociado a una aplicacion.');
            table.unique(['access_token']);
            table.unique(['user_id', 'app_id']);
            table.index(['access_token'], 'idx_token_access_token', {});
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("tokens");
};
