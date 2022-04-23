
var Hash = require("../Hash.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { secret: Hash.token(), name: 'gbolivar' },
        { secret: Hash.token(), name: 'producer' },
        { secret: Hash.token(), name: 'consumer' },
        { secret: Hash.token(), name: 'services' }
      ]);
    });
};
