import { Request, Response } from 'express';

export function parseRequest(request: Request, response: Response, next: any) {
  next();
}
