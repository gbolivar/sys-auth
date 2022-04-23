

exports.up = function (knex) {
    return knex.schema
        .createTable('authorizations', function (table) {
            table.increments('id');
            table.biginteger('app_id').notNullable();
            table.string('grant', 50).notNullable();
            table.boolean('status').default(true);
            table.timestamp('created_at').defaultTo(knex.fn.now());

            table.comment('Autorizaciones que pertenecen a una aplicacion.');
            table.unique(['app_id', 'grant']);
            table.index(['grant'], 'idx_authorizations_grant', {});
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("authorizations");
};
