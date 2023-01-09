import { Repository } from '../../repository/repository';

export class BaseService {
  repository;
  constructor(repository: Repository /* add orm object here */) {
    this.repository = repository;
  }

  async getAll(entity: any): Promise<any> {
    return { value: 'text' };
  }
  async create(entity: any) {
    return { value: 'created_text' };
  }
  async update(entity: any) {
    return { value: 'updated text' };
  }
  async delete(entity: any) {
    return { value: 'updated text' };
  }
}
