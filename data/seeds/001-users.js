exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      username: "niceguy",
      password: "password",
      name: "Mr. Nice Guy",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 Nice Drive",
  },
  {
    id: 2,
    username: "nicegal",
    password: "password",
    name: "Mr. Nice Gal",
    phone: "1234567890",
    email: "test@email.com",
    address: "123 Nice Drive",
},
{
  id: 2,
  username: "niceperson",
  password: "password",
  name: "Mr. Nice Person",
  phone: "1234567890",
  email: "test@email.com",
  address: "123 Nice Drive",
},
  ]);
};
