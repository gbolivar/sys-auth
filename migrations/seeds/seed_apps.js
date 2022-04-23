
var Hash = require("../Hash.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apps')
    .then(function () {
      // Inserts seed entries
      return knex('apps').insert([
        { label: 'Authentication API', credential: 'sys-cyberbot-auth', app_token: Hash.jwtKey() },
        { label: 'Systems Producers', credential: 'sys-producers', app_token: Hash.jwtKey() },
        { label: 'Systems Consumers', credential: 'sys-consumers', app_token: Hash.jwtKey() },
        { label: 'Systems Services', credential: 'sys-services', app_token: Hash.jwtKey() }
      ]);
    });
};