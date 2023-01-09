import express, { Application } from 'express';
import helmet from 'helmet';
import { loggerMiddleware } from '../middleware/logger';
import { controllers } from './controllers';

export const initializeMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(express.json());
  app.use(loggerMiddleware);
};
export const initializeControllers = (app: Application) => {
  controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
  });
};
