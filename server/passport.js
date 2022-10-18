const GoogleStrategy = require('passport-google-oauth20').Strategy
const axios = require('axios')
require('dotenv').config();
const db = require('./models/model');

module.exports = function(passport){
  passport.use(new GoogleStrategy({
     clientID: "1063485577501-u99nmjg60g580svdmcok4nerlcdhv73b.apps.googleusercontent.com",
     clientSecret: "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", 
     callbackURL: '/api/auth/google/callback'
  }, 

  async(accessToken,refreshToken, profile, done)=> {
    console.log(profile)

    const {given_name, family_name, email} = profile._json
    const sub = profile._json.sub;

    const userBody = {
      firstname: given_name,
      lastname: family_name,
      email: email,
      password: sub
    };

    try {
      // const query = `SELECT email, password, firstname, lastname FROM users WHERE email='${email}' AND password='${sub}'`;
      // const user = db.query(query, (err, result) => {
      //   if (err) console.log('error in verifying: ', err);

      //   if (result.rows.length === 0) {
      //     const query = `INSERT INTO users (email, password, firstname, lastname) VALUES (${email, sub, given_name, family_name}`;
      //     db.query(query, (err, result) => {
      //       if (err) console.log('error in creating: ', err);

      //       res.locals.user = result;
      //       console.log('user: ', result);
      //     })
      //   }
      // })

      console.log(email, sub);
      let user = await axios.post('http://localhost:3000/api/users/login', {
        email: email,
        password: sub
      });

      if (user.data.length > 0) {
        done(null, user);
      }

      else {
        user = await axios.post('http://localhost:3000/api/users/register', userBody);
      }
      done(null, user);

    }

    catch(err) {
      console.log('error: ', err);
    }

  })),
  
  passport.serializeUser((user, done) => {
    console.log('user: ', user)
    done(null, {
      id: user.data.password,
      email: user.data.email,
    });
  })

  passport.deserializeUser((id, done) => {
    // User.findById(id.id, (err, user) => done(err, user));
    // console.log('id: ', id)
    // done(id, "hi");
    console.log('id inside deseralize: ', id)
    const query = `SELECT * FROM users WHERE password = '${id.id}'`
    db.query(query, (err, user) => done(err, user));
  });

}