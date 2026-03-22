const express = require("express");
const router = express.Router();

// dummy data
let users = {};

router.post("/earn", (req, res) => {
  const { user, amount } = req.body;

  if (!users[user]) users[user] = 0;
  users[user] += amount;

  res.json({ message: "Reward added", total: users[user] });
});

router.get("/:user", (req, res) => {
  const user = req.params.user;
  res.json({ reward: users[user] || 0 });
});

module.exports = router;
