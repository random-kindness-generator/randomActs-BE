exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    { id: 1, action: "Pay it forward" },
    { id: 2, action: "Mow their yard" },
    { id: 3, action: "Take the trash out" },
    { id: 4, action: "Treat them to breakfast" },
    { id: 5, action: "Send them flowers" },
    { id: 6, action: "Tell them to get this app" },
    { id: 7, action: "Go on a walk with them" },
    { id: 8, action: "Take them to the Zoo" },
    { id: 9, action: "Buy them a coffee" },
    { id: 10, action: "Help them, for crying out loud, just find something and help them with it!" }
  ]);
};
