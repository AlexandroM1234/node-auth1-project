const router = require("express").Router();
const bycrypt = require("bcryptjs");
const Users = require("./user-model");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bycrypt.hashSync(user.password, 9);
  user.password = hash;
  Users.addUser(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      console.log("you messed up adding a user", err);
      res.status(500).json({ error: "error adding a new user" });
    });
});

router.post("/login", (req, res) => {
  let { UserName, Password } = req.body;
  Users.findUser(UserName)
    .then((foundUser) => {
      if (foundUser && bycrypt.compareSync(Password, foundUser[0].Password)) {
        req.session.loggedIn = true;
        res.status(200).json({ message: "Logged in" });
      } else {
        res.status(500).json({ message: "You shall not pass!" });
      }
    })
    .catch((err) => {
      console.log("messed up loggin in", err);
      res.status(500).json({ error: "error logging in" });
    });
});
module.exports = router;
