const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
};

function find() {
  return db(`users`);
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db(`users`).where({ id });
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function update(id, changes) {
  return db(`users`)
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db(`users`)
    .where({ id })
    .delete();
}