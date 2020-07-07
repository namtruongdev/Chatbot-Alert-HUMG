"use strict";

var _lowdb = _interopRequireDefault(require("lowdb"));

var _FileAsync = _interopRequireDefault(require("lowdb/adapters/FileAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const adapter = new _FileAsync.default('db.json');

class DB {
  constructor() {}

  async write(data) {
    const db = await (0, _lowdb.default)(adapter);
    await db.defaults({
      users: []
    }).write();
    await db.get('users').push(data).write();
  }

  async updateMsv(id, msv) {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').find({
      id: id
    }).assign({
      msv: msv
    }).write();
  }

  async checkData(id) {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').find({
      id: id
    }).value();
  }

  async addSub(id) {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').find({
      id: id
    }).assign({
      sub: 1
    }).write();
  }

  async removeSub(id) {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').find({
      id: id
    }).assign({
      sub: 0
    }).write();
  }

  async getMsv(id) {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').find({
      id: id
    }).value().msv;
  }

  async getSub() {
    const db = await (0, _lowdb.default)(adapter);
    return await db.get('users').filter({
      sub: 1
    }).value();
  }

}

module.exports = new DB();