module.exports = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: "YOU CANNOT PASS!" });
  }
};
