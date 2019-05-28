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
router.get("/:id", async (req, res) => {});

//============================Update Router
router.put("/", async (req, res) => {});

//============================Delete Router
router.delete("/", async (req, res) => {});

module.exports = router;
