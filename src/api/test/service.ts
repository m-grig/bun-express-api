import Bun from '../../common/bun.wrapper';
import { BaseService } from '../base/base.service';

export class TestService extends BaseService {
  async getAll(entity: any): Promise<any> {
    // const file = Bun.readFile('test.txt');
    // return file;
    return { test: 'dataset' };
  }
}
