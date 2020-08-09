const router = require("express").Router();

const Users = require("./user-model");

router.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log("you messed up getting the users", err);
      res.status(500).json({ error: "error getting users" });
    });
});

module.exports = router;
