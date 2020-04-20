const express = require("express");
const server = express();
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "is running" });
});

module.exports = server;
