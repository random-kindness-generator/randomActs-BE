const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db(`contacts`);
}
function findById(id) {
  return db(`contacts`).where({ id });
}
function add(contact) {
  return db(`contacts`).insert(contact, `id`);
}
function update(id, changes) {
  return db(`contacts`)
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db(`contacts`)
    .where({ id })
    .delete();
}