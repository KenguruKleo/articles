const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iot: timestamp }, config.jwt_secret);
}

module.exports = {

  getToken(req, res) {
    res.send({ token: tokenForUser(req.user), userName: req.user.userName });
  },

  logout(req, res) {
    req.session = null;
    res.send({ token: '' });
  },

  async signup(req, res, next) {
    const { userName, password } = req.body;

    if (!userName || !password) {
      res.status(422).send({ error: 'You must provide user name and password' });
    }

    try {
      const existingUser = await User.findOne({ userName });

      if (existingUser) {
        res.status(422).send({ error: 'UserId is in use' });
        return;
      }

      const user = await new User({ userName, password }).save();

      res.json({ token: tokenForUser(user) });
    } catch (e) {
      next(e);
    }
  },
};
