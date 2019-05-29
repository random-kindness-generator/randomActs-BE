const express = require("express");
const configureMiddleware = require('./middleware/serverSetup');
const authRouter = require('./auth/authRouter');
const contactsRouter = require('./routes/contactsRouter');
const actionsRouter = require('./routes/actionsRouter');
const usersRouter = require('./routes/usersRouter');

const server = express();
configureMiddleware(server);

server.use('/api', authRouter);
server.use('/api/contacts', contactsRouter);
server.use('/api/actions', actionsRouter);
server.use('/api/users', usersRouter)

server.get("/", async (req, res) => {
  res.status(200).json({ message: "Welcome yo" });
});

module.exports = server