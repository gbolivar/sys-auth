
exports.up = function (knex) {
    return knex.schema
        .createTable('apps', function (table) {
            table.increments('id');
            table.string('label', 70).notNullable();
            table.string('credential',100).notNullable();
            table.string('app_token', 250).notNullable()
            table.json('host_access').nullable()
            table.boolean('status').default(true);
            table.timestamp('created_at').defaultTo(knex.fn.now());
            
            table.comment('Aplicaciones disponibles para autenticar.');
            table.unique(['label', 'credential', 'app_token']);
            table.index(['credential'], 'idx_apps_credential', {});
            table.index(['app_token'], 'idx_apps_app_token', {});
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("apps");
};
