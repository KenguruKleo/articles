const bcrypt = require('bcrypt-nodejs');
const shortid = require('shortid');
const logger = require('../utils/logger');

const users = [];

class User {
  constructor(user) {
    Object.keys(user)
      .forEach(key => {
        this[key] = user[key];
      });
  }

  static async findById(id) {
    const foundUser = await users.find(user => user.id === id);
    return foundUser;
  }

  static async findOne({ userName = '' } = {}) {
    const foundUser = await users.find(user => user.userName === userName);
    return foundUser;
  }

  async comparePassword(candidatePassword) {
    return new Promise((done, error) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => { // eslint-disable-line
        if (err) { return error(err); }

        done(isMatch);
      });
    });
  }

  async preSave() {
    return new Promise((done, error) => {
      bcrypt.genSalt(10, (err, salt) => { // eslint-disable-line
        if (err) { return error(err); }

        bcrypt.hash(this.password, salt, null, (errHash, hash) => { // eslint-disable-line
          if (err) { return error(err); }
          this.password = hash;
          done();
        });
      });
    });
  }

  async save() {
    await this.preSave();
    this.id = shortid.generate();
    users.push(this);
    logger.info('Created new user:', this);
    return this;
  }
}

users.push(new User({
  id: 'HJrH3uwpf',
  userName: 'test@user.com',
  password: '$2a$10$UsACIqjnQD4vJamxCqrxROihyrlQ0up1fmu1asTx5ccushz071Cq.',
}));
users.push(new User({
  id: 'r1itdFDpf',
  userName: 'tim@walker.com',
  password: '$2a$10$PejBJT/Ir9AQuow2WMKetedXD0fxzBH7Qen6nZeF9H.HLaHgSM1Km',
}));

module.exports = User;
