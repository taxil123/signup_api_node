const User = require("../models/user");

exports.createUser = async (req, res) => {
  console.log(req.body)
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.mobile_no) {
    return res.status(422).json({
      firstName: "firstname is required",
      lastName: "lastname is required",
      email: "email is required",
      mobile_no: "mobile number is required",
    });
  }
  const user = new User(req.body);

  User.create(user, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.listUsers = async (req, res) => {
  User.list(function (err, users) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(users);
  });
}

exports.readUser = async (req, res) => {
  User.read(function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.readSingleUser = async (req, res) => {
  const id = req.params.userId
  User.readSingle(id,function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.userId;
  User.update(id, new User(req.body), function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.userId;
  console.log(req.params)
  User.delete(id, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};
