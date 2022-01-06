import { Request, Response } from 'express';
import { getMockReq, getMockRes } from '@jest-mock/express';
import StatusController from './Status.controller';
import httpStatus from 'http-status';

describe('StatusController', () => {
  it('Should call status with 200', () => {
    const req: Request = getMockReq();
    const res: Response = getMockRes().res;

    const statusController = new StatusController();
    statusController.run(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK);
  });
});
