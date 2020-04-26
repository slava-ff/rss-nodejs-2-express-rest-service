const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  _id: {
    type: String,
    default: uuid
  }
});

userSchema.pre('save', async function save(next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);

    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function comparePassword(
  passwordToCheck
) {
  try {
    return await bcrypt.compare(passwordToCheck, this.password);
  } catch (err) {
    throw new Error(err);
  }
};

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;

  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
