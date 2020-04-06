const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(board) {
    const { id, name, login } = board;
    return { id, name, login };
  }
}

module.exports = Board;
