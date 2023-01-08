import fs from 'fs';

export class BaseService {
  constructor() {}
  async getAll(entity: any) {
    // const file = Bun.file('test.txt')
    return { value: `text` };
  }
  async create(entity: any) {
    return { value: 'created text' };
  }
  async update(entity: any) {
    return { value: 'updated text' };
  }
  async delete(entity: any) {
    return { value: 'updated text' };
  }
}

// const data = await fs.promises.readFile('users.json');
// const users = JSON.parse(data);
