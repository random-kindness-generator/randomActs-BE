exports.seed = function(knex, Promise) {
  return knex("contacts").insert([
    {
      id: 1,
      name: "Contact 1",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "likes beach stuff",
      user_id: 1
    },
    {
      id: 2,
      name: "Contact 2",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "likes wood working",
      user_id: 2
    },
    {
      id: 3,
      name: "Contact 3",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "work",
      notes: "Father of three boy's, love baseball",
      user_id: 1
    },
    {
      id: 4,
      name: "Contact 4",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "work",
      notes: "Gamer, loves MMORPG's",
      user_id: 3
    },
    {
      id: 5,
      name: "Contact 5",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "Recently married, loves gardening",
      user_id: 1
    }, 
    {
      id: 6,
      name: "Contact 6",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "likes beach stuff",
      user_id: 1
    },
    {
      id:7,
      name: "Contact 7",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "likes wood working",
      user_id: 2
    },
    {
      id: 8,
      name: "Contact 8",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "work",
      notes: "Father of three boy's, love baseball",
      user_id: 1
    },
    {
      id: 9,
      name: "Contact 9",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "work",
      notes: "Gamer, loves MMORPG's",
      user_id: 3
    },
    {
      id: 10,
      name: "Contact 10",
      phone: "1234567890",
      email: "test@email.com",
      address: "123 street",
      group: "friends",
      notes: "Recently married, loves gardening",
      user_id: 1
    }
  ]);
};