import { Request, Response } from 'express';
import { BaseController } from '../base/base.controller';
import { Repository } from '../../repository/repository';
import { ControllerDependencies } from '../base/types';
import { config } from './config';
import { TestService } from './service';
import { Test } from './types';

export const TestController = (repository: Repository) => {
  const service = new TestService(repository);
  const dependencies: ControllerDependencies = { service, config };

  class TestController extends BaseController(dependencies) {
    async getAll(request: Request, response: Response) /*: ApiResponse<Test[]>*/ {
      super.getAll(request, response); // override call and perform additional logic
    }
  }

  return TestController;
};
