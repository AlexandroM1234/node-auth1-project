const express = require("express");
const server = express();
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");
const session = require("express-session");
const authenticator = require("./authenticator");

const sessionConfig = {
  name: "Monster",
  secret: process.env.SESSION_SECRET || "can you keep a secret",
  resave: false,
  saveUninitialize: process.env.SEND_COOKIES || true,
  cookie: {
    maxAge: 1000 * 60 * 10, // good for 10 minutes in milliseconds
    secure: process.env.USE_SECURE_COOKIES || false,
    httpOnly: true, // can JS on the client access the cookie
  },
};

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/users", authenticator, userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "is running" });
});

module.exports = server;
