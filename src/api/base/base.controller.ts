import express from 'express';
import { EMPTY } from '../../common/constants';
import { sendResponse } from './response';
import { ControllerDependencies } from './types';

export const BaseController = (dependencies: ControllerDependencies) => {
  const service = dependencies.service;

  class Controller {
    public router = express.Router();
    public path = dependencies.config.path;

    constructor() {
      this.intializeRoutes();
    }

    intializeRoutes() {
      this.router.get(EMPTY, this.getAll);
      this.router.post(EMPTY, this.create);
      this.router.patch(EMPTY, this.update);
      this.router.delete(EMPTY, this.delete);
    }

    async getAll(request: express.Request, response: express.Response) /*: ApiResponse<Entity[]>*/ {
      const entity = await service.getAll(request.params);
      sendResponse(response, entity);
    }
    async create(request: express.Request, response: express.Response) /*: ApiResponse<Entity>*/ {
      const entity = await service.create(request.body);
      sendResponse(response, entity);
    }
    async delete() /*: void*/ {
      throw Error('Note implemented');
    }
    async update() /*: ApiResponse<Entity>*/ {
      throw Error('Note implemented');
    }
  }
  return Controller;
};
