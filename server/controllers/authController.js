const users = require("../models/model");

const authController = {};

authController.signin = function (req, res, next) {

  const { user, pass } = req.body;
  //create SQL query string
  const queryString = ` SELECT col-name FROM table-name
  WHERE user = '${user}' AND pass = '${pass}')`;
  //add user to db
  users.query(queryString)
    .then(data => console.log(data));
  //check user name and password againt database

  // if found go to next middleware. if not go to error handler
  if (user) {
    return next();
  } else  {
    const errObj = {
      log: 'authController.signin',
      message: { err: 'Unsuccessful login attempt'},
    };
    return next(errObj);
  }
};

authController.createCookie = function(req, res, next) {
  try {
    // delete other user cookies
  
    // create new session cookies

    return next();

  } catch (err) {
    const errObj = {
      log: 'authController.createCookie',
      message: { err: 'Error creating session cookie'},
    };
    return next(errObj);
  }

}

authController.checkCookie = function (req, res, next) {
  if (req.cookies.token === 'admin') {
    return next();
  } else {
    const errObj = {
      log: 'authController.signin',
      message: { err: 'You must be signed in to view this page'},
    };
    return next(errObj);
  }
};

module.exports = authController;
