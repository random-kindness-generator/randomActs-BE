const express = require("express");
const configureMiddleware = require('./middleware.js');

const server = express();

configureMiddleware(server);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server