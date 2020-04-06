const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
    // title = "TITLE",
    // order,
    // description,
    // userId, //assignee
    // boardId,
    // columnId
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(task) {
    const { id, name, login } = task;
    return { id, name, login };
  }
}

module.exports = Task;
