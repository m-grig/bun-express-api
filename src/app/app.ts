import express, { Application } from 'express';
import { initializeMiddlewares, initializeControllers } from './intializers';

export const expressApp = (): Application => {
  const app = express();
  initializeMiddlewares(app);
  initializeControllers(app);

  return app;
};
