const express = require("express");
const router = express.Router();
const {
  createUser,
  readUser,
  readSingleUser,
  updateUser,
  deleteUser,
  listUsers,
} = require("../controllers/user");

router.post("/user", createUser);

router.get("/user", readUser);

router.get('/',listUsers)

router.get("/user/:userId", readSingleUser);

router.put("/user/:userId", updateUser);

router.delete("/user/:userId", deleteUser);

module.exports = router;
