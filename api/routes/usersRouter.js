const express = require("express");

const db = require("../models/userModel.js")
const contactDB = require("../models/contactsModel.js")

const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "user not found" });
            }
        })
})

// For this route, we will be pulling up the contacts that match the id of the user

router.get("/:id/contacts", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            if (user) {
                // This is where we will call our contacts helper function
                // contactDB.findByUser(userId)
            } else {
                res.status(404).json({ message: "user not found" });
            }
        })
})

router.get("/:email", (req, res) => {
  const { email } = req.params;

  db.findByEmail(email)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "we failed you", error: err });
    });
});

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    
    if (userData) {
      try {
        const userId = await db.add(userData);
        // const user = await db.findById(userId[0]);
        res.status(201).json(userId);
      } catch (error) {
        res.status(500).json({error: "Unable to add user to database"})
      }
      
    } else {
      res.status(200).json(checkEmail);
    }
    // res.status(201).json(user);
  } catch (error) {
    let message = "error creating the user";

    res.status(500).json({ message, error });
  }
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(count => {
      if (count < 1) {
        res.status(404).json({ message: "please try a valid user" });
      } else {
        res.status(200).json({ message: "user has been deleted" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error deleting user", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db.update(id, changes)
    .then(count => {
      if (count) {
        res.status(200).json({ message: `${count} user(s) updated` });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "thats our bad", err });
    });
});

module.exports = router;