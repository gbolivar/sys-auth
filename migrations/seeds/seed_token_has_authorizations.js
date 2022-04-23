
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('token_has_authorizations')
    .then(function () {
      // Inserts seed entries
      return knex('token_has_authorizations').insert([
        { token_id: 1, authorization_id: 1},
        { token_id: 2, authorization_id: 2 },
        { token_id: 3, authorization_id: 3 },
        { token_id: 4, authorization_id: 4 },
        { token_id: 5, authorization_id: 2 },
        { token_id: 6, authorization_id: 3 },
        { token_id: 7, authorization_id: 4}
      ]);
    });
};