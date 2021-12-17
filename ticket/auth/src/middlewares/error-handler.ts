import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('something went wrong');

  res.status(400).send({
    message: 'Something went wrong',
  });
};