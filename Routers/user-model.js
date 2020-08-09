const db = require("../database/db-config");

module.exports = {
  getUsers,
  addUser,
  findUser,
};

function getUsers() {
  return db("users").select("id", "UserName");
}

function addUser(user) {
  return db("users").insert(user, "id");
}

function findUser(UserName) {
  return db("users").where({ UserName });
}
