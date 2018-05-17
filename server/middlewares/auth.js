const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const config = require('../config');
const User = require('../models/user');

const localOptions = { usernameField: 'userName' };
const localLoginStrategy = new LocalStrategy(localOptions, async (userName, password, done) => {
  try {
    const user = await User.findOne({ userName });
    if (!user) { return done(null, false); }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) { return done(null, false); }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwt_secret,
};

const jwtLoginStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});

passport.serializeUser((user, done) => {
  console.log('serializeUser:', user);
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  console.log('deserializeUserId:', userId);
  const user = await User.findById(userId);
  console.log('deserializeUser:', user);
  done(null, user);
});

passport.use(jwtLoginStrategy);
passport.use(localLoginStrategy);

const requireAuth = passport.authenticate(['jwt', 'session'], { session: true });
const requireLogin = passport.authenticate('local', { session: true });

module.exports = {
  passport,
  requireAuth,
  requireLogin,
};
