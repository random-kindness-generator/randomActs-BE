const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findByUser,
  add,
  addContact,
  update,
  remove
};

function find() {
  return db(`contacts`);
}
function findById(id) {
  return db(`contacts`).where({ id });
}
async function findByUser(user_id) {
  return await db('contacts').where({user_id})
}
async function add(contact) {
  const [id] = await db('contacts').insert(contact);

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
function addContact(contact) {
    return db('contacts').insert(contact).into('contacts')
}