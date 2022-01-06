import { ConsoleLogger } from '.';

export interface Logger {
  debug(message: string): void;
  error(message: string): void;
  info(message: string): void;
}

export class LoggerFactory {
  public static createLogger(name: string): Logger {
    return ConsoleLogger.create(name);
  }
}
