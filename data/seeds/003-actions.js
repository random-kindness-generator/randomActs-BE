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
    { id: 10, action: "Help them, for crying out loud, just find something and help them with it!" },
    { id: 11, action: "Pay it forward" },
    { id: 12, action: "Mow their yard" },
    { id: 13, action: "Take the trash out" },
    { id: 14, action: "Treat them to breakfast" },
    { id: 15, action: "Send them flowers" },
    { id: 16, action: "Tell them to get this app" },
    { id: 17, action: "Go on a walk with them" },
    { id: 18, action: "Take them to the Zoo" },
    { id: 19, action: "Buy them a coffee" },
    { id: 20, action: "Help them, for crying out loud, just find something and help them with it!" }
  ]);
};
