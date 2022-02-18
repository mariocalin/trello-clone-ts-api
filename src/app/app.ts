import 'reflect-metadata';

import { Configuration } from './configuration';
import { Server } from './server';

export class App {
  private server: Server;

  constructor(configuration: Configuration) {
    this.server = new Server(configuration.port);
  }

  async init(): Promise<void> {}

  start(): Promise<void> {
    return this.server.listen();
  }

  async stop(): Promise<void> {
    await this.server?.stop();
  }

  get port(): number {
    if (!this.server) {
      throw new Error('Trello API has not been started');
    }
    return this.server.port;
  }

  get httpServer() {
    return this.server?.httpServer;
  }
}
