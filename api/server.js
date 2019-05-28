const express = require("express");
const configureMiddleware = require('./middleware.js');
const authRouter = require('./auth/authRouter');

const server = express();
configureMiddleware(server);

server.use('/api', authRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server