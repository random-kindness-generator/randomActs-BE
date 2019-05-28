const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet")


const server = express();

server.use(express.json(), helmet(), helmet(), morgan('dev'));

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server