"user strict";

const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.mobile_no = user.mobile_no;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

User.create = function (user, result) {
  connection.query("INSERT INTO users set ?", user, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

User.list = function (result) {
  connection.query("SELECT * FROM users", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
}


User.read = function (result) {
  connection.query("SELECT * FROM users", (err, res) => {
    console.log('called')
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


User.readSingle = function (id,result) {
  console.log(id)
  connection.query("SELECT * FROM users WHERE _id = ?",[id], (err, res) => {
    console.log('called')
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.update = function (id, user, result) {
  connection.query("UPDATE users SET ? WHERE _id = ?", [user, id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

User.delete = function (id, result) {
  connection.query("DELETE FROM users WHERE _id = ?", [id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
