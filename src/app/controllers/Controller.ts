import { Request, Response } from 'express';

/**
 * Defines what a Controller must implement
 */
export interface Controller {
  /**
   *
   *
   * @param req
   * @param res
   */
  run(req: Request, res: Response): Promise<void>;
}
