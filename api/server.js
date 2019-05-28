const express = require("express");
const configureMiddleware = require('./middleware/serverSetup');
const authRouter = require('./auth/authRouter');
const contactsRouter = require('./routers/contactsRouter')

const server = express();
configureMiddleware(server);

server.use('/api', authRouter);
server.use('/api/contacts', contactsRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server