const router = require("express").Router();
const db = require("../models.contactModel");

//============================Create Router
router.post("/", async (req, res) => {})

//============================Read Router
router.get("/", async (req, res) => {})

//-----------------------Read By Id
router.get("/:id", async (req, res) => {})

//============================Update Router
router.put("/", async (req, res) => {})

//============================Delete Router
router.delete("/", async (req, res) => {})

module.exports = router;