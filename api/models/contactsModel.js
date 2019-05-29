const db = require('../../data/dbConfig.js');

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
async function add(user) {
  const [id] = await db('contacts').insert(user);

  return findById(id);
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