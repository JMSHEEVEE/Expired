const users = require("../models/model");

const userController = {};

userController.createUser = function (req, res, next) {
  try {
    //parse new user name and password
    // attempt to add new user to appropriate table. if successful then move on to next middleware. if not go to error handler
    const {user, pass} = req.body;
    //create SQL query string
    const queryString = ` INSERT INTO table-name (user-col-name,pass-col-name)
    VALUES ('${user}','${pass}')`;
    //add user to db
    users.query(queryString);
    // .then ????
    return next();
  } catch(err) {
    console.log(err)
    const errObj = {
      log: 'userController.createUser',
      message: { err: 'Unsuccessful account creation'},
    };
    return next(errObj);
  }
}

module.exports = userController;