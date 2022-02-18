import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Service } from 'typedi';

import { Controller } from './Controller';

@Service()
export default class StatusController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send();
  }
}
