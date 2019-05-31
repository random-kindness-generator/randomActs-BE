const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db(`actions`);
}
function findById(id) {
  return db(`actions`).where({ id });
}
function add(action) {
  return db('actions').insert(action).into('actions');
}
function update(id, changes) {
  return db(`actions`)
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db(`actions`)
    .where({ id })
    .delete();
}