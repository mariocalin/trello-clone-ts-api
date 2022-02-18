import { Request, Response, Router } from 'express';
import Container from 'typedi';

import StatusController from '../controllers/Status.controller';

export const register = (router: Router) => {
  const statusController: StatusController = Container.get(StatusController);
  router.get('/status', (req: Request, res: Response) => statusController.run(req, res));
};
