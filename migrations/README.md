# Migraciones
# if /bin/sh: knex: not found
npm install -g knex

## Crear una Migración
knex migrate:make migration_name 

## Armar una Entidad

exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
    })
    .createTable('products', function (table) {
       table.increments('id');
       table.decimal('price').notNullable();
       table.string('name', 1000).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("products")
      .dropTable("users");
};
## Correr todas las migraciones 
knex migrate:latest

## Correr una Migración
knex migrate:up

## Deshacer Migracion
 knex migrate:rollback

## Deshacer Migracion completa
 knex migrate:rollback --all

## Crear un seed de datos
knex seed:make seed_name

## Correr una seed
knex seed:run

## Correr un seed expecifico
knex seed:run --specific=seed-filename.js --specific=another-seed-filename.js

## Referencia
(url)https://knexjs.org/#Migrations