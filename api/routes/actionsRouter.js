const router = require("express").Router();
const restricted = require("../middleware/restricted")
const db = require("../models/actionsModel");

//============================Create Router
router.post("/", restricted, async (req, res) => {
    try {
      const action = req.body;
      const inserted = await db.add(action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the action:", error });
    }
});

//============================Read Router
router.get("/", restricted, async (req, res) => {
  try {
    const actions = await db.find();
    res.status(200).json(actions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the actions" });
  }
});

//-----------------------Read By Id
router.get("/:id", restricted, async (req, res) => {
    try {
        const action = await db.findById(req.params.id);
        if (action) {
          res.status(200).json(action);
        } else {
          res.status(404).json({ message: "We could not find the action" });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error retrieving the action" });
      }
});

//============================Update Router
router.put("/:id", restricted, async (req, res) => {
    const changes = req.body;

    if (changes.action) {
      try {
        const updated = await db.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: "That action does not exist"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error updating the action" });
      }
    } else {
      res.status(400).json({
        message: "Please provide the name of the action"
      });
    }
});

//============================Delete Router
router.delete("/:id", restricted, async (req, res) => {
    try {
        const count = await db.remove(req.params.id);
        if (count > 0) {
          res.status(204).end();
        } else {
          res.status(404).json({
            message: "That action does not exist, perhaps it was deleted already"
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "We ran into an error removing the action" });
      }
});

module.exports = router;
