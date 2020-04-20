const db = require("../database/db-config");

module.exports = {
  getUsers,
};

function getUsers() {
  return db("users").select("id", "UserName");
}
