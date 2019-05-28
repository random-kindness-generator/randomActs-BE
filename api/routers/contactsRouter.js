const router = require("express").Router();
const db = require("../models.contactModel");

//============================Create Router
router.post("/", async (req, res) => {
  const contact = req.body;

  if (contact.name) {
    try {
      const inserted = await db.add(contact);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the contact" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the contact" });
  }
});

//============================Read Router
router.get("/", async (req, res) => {
  try {
    const contacts = await db.find();
    res.status(200).json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the contacts" });
  }
});

//-----------------------Read By Id
router.get("/:id", async (req, res) => {
    try {
        const contact = await db.findById(req.params.id);
        if (contact) {
          res.status(200).json(contact);
        } else {
          res.status(404).json({ message: "We could not find the contact" });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error retrieving the contact" });
      }
});

//============================Update Router
router.put("/", async (req, res) => {
    const changes = req.body;

    if (changes.name) {
      try {
        const updated = await db.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: "That contact does not exist"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error updating the contact" });
      }
    } else {
      res.status(400).json({
        message: "Please provide the name of the contact"
      });
    }
});

//============================Delete Router
router.delete("/", async (req, res) => {
    try {
        const count = await db.remove(req.params.id);
        if (count > 0) {
          res.status(204).end();
        } else {
          res.status(404).json({
            message: "That contact does not exist, perhaps they were deleted already"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error removing the contact" });
      }
});

module.exports = router;
