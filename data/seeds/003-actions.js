exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      action: "pay it forward"
    },
    {
      id: 2,
      action: "pay it forward"
    },
    {
      id: 3,
      action: "pay it forward"
    },
    {
      id: 4,
      action: "pay it forward"
    },
    {
      id: 5,
      action: "pay it forward"
    },
    {
      id: 6,
      action: "pay it forward"
    },
    {
      id: 7,
      action: "pay it forward"
    },
    {
      id: 8,
      action: "pay it forward"
    },
    {
      id: 9,
      action: "pay it forward"
    },
    {
      id: 10,
      action: "pay it forward"
    }
  ]);
};
