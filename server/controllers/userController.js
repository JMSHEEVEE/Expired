const db = require("../models/model");

const userController = {};

userController.createUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const { firstname, lastname, email, password } = req.body;
    const query = `INSERT INTO users (email, password, firstname, lastname) VALUES ('${email}', '${password}', '${firstname}', '${lastname}')`;

    db.query(query, (err, user) => {
      if (err) {
        console.log("err: ", err);
        return next({
          log: "Cannot create user",
          status: 400,
          message: err,
        });
      }
      res.locals.user = user;
      return next();
    });
  } catch (err) {
    console.log("error: ", err);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const query = `SELECT email, password, firstname, lastname FROM users WHERE email='${email}' AND password='${password}'`;

    db.query(query, (err, user) => {
      if (err)
        return next({
          log: "Cannot verify user",
          status: 400,
          message: err,
        });

      if (user.rows.length > 0) {
        res.locals.user = user.rows;
      } else {
        console.log("user no verify :(");
        res.locals.user = user.rows;
      }
      return next();
    });
  } catch (err) {
    console.log("error: ", err);
  }
};

module.exports = userController;