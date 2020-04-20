const express = require("express");
const server = express();
const userRouter = require("./Routers/userRouter");
server.use(express.json());

server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.json({ api: "is running" });
});

module.exports = server;
