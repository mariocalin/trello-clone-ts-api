import { Request, Response } from 'express';
import { Controller } from './Controller';
import { Service } from 'typedi';
import httpStatus from 'http-status';

@Service()
export default class StatusController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send();
  }
}
