import * as http from 'http';
import { Logger, LoggerFactory } from './logger/Logger';
import Router from 'express-promise-router';
import express from 'express';
import { registerRoutes } from './routes';

export class Server {
  private express: express.Express;
  readonly port: number;
  private logger: Logger = LoggerFactory.createLogger('Server');
  httpServer?: http.Server;

  constructor(port: number) {
    this.port = port;
    this.express = express();
    const router = Router();
    this.express.use(router);
    registerRoutes(router);
  }

  async listen(): Promise<void> {
    this.httpServer = this.express.listen(this.port, () => {
      this.logger.error(`Server is running at http://localhost:${this.port} in ${this.express.get('env')} mode`);
      return Promise.resolve();
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
