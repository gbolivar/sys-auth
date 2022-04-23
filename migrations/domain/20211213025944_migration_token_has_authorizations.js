

exports.up = function (knex) {
    return knex.schema
        .createTable('token_has_authorizations', function (table) {
            table.increments('id');
            table.biginteger('token_id').notNullable();
            table.biginteger('authorization_id').notNullable();

            table.comment('token que tiene las autorizaciones que pertenecen a una aplicacion.');
            table.unique(['token_id', 'authorization_id']);
            table.index(['token_id','authorization_id'], 'idx_token_has_authorizations', {});
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("token_has_authorizations");
};
