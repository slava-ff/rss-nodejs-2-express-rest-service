const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');
const usersRepo = require('../users/user.db.repository');
const { ForbiddenError } = require('../../helpers/error.helper');

const checkLogin = async ({ login, password }) => {
  const user = await usersRepo.getOneByLogin(login);

  if (!user || (await !user.comparePassword(password))) {
    throw new ForbiddenError();
  } else {
    const payload = { userId: user._id, login: user.login };
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 10 });

    return token;
  }
};

module.exports = { checkLogin };
