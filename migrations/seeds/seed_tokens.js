
var Hash = require("../Hash.js");


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tokens')
    .then(function () {
      // Inserts seed entries
      
      return knex('tokens').insert([
        { access_token: Hash.token(), user_id: 1, app_id: 1},
        { access_token: Hash.token(), user_id: 1, app_id: 2},        
        { access_token: Hash.token(), user_id: 1, app_id: 3},
        { access_token: Hash.token(), user_id: 1, app_id: 4},
        { access_token: Hash.token(), user_id: 2, app_id: 2 },
        { access_token: Hash.token(), user_id: 3, app_id: 4 },
        { access_token: Hash.token(), user_id: 4, app_id: 4 }
      ]);
    });
};
