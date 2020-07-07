import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const adapter = new FileAsync('db.json');

class DB {
  constructor() {}
  async write(data) {
    const db = await low(adapter);
    await db.defaults({ users: [] }).write();
    await db.get('users').push(data).write();
  }
  async updateMsv(id, msv) {
    const db = await low(adapter);
    return await db.get('users').find({ id: id }).assign({ msv: msv }).write();
  }
  async checkData(id) {
    const db = await low(adapter);
    return await db.get('users').find({ id: id }).value();
  }
  async addSub(id) {
    const db = await low(adapter);
    return await db.get('users').find({ id: id }).assign({ sub: 1 }).write();
  }
  async removeSub(id) {
    const db = await low(adapter);
    return await db.get('users').find({ id: id }).assign({ sub: 0 }).write();
  }
  async getMsv(id) {
    const db = await low(adapter);
    return await db.get('users').find({ id: id }).value().msv;
  }
  async getSub() {
    const db = await low(adapter);
    return await db.get('users').filter({ sub: 1 }).value();
  }
}

module.exports = new DB();
