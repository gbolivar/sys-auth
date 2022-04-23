
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authorizations')
    .then(function () {
      // Inserts seed entries
      return knex('authorizations').insert([
        { app_id: 1, grant: 'access_login'},
        { app_id: 2, grant: 'access_login'},
        { app_id: 3, grant: 'access_login'},
        { app_id: 4, grant: 'access_login'}
      ]);
    });
};
