import { Logger } from '..';

type LogLevel = 'debug' | 'info' | 'error';

const Color = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m'
};

export class ConsoleLogger implements Logger {
  private constructor(private name: string) {}

  public static create(name: string) {
    return new ConsoleLogger(name);
  }

  debug(message: string): void {
    this.logToConsole('debug', message);
  }

  error(message: string): void {
    this.logToConsole('error', message);
  }

  info(message: string): void {
    this.logToConsole('info', message);
  }

  private logToConsole(level: LogLevel, message: string): void {
    console.log(
      this.getColorForLevel(level),
      `${level.toUpperCase()} [${this.getDateString()} - ${this.name}]  ${message}`
    );
  }

  private getDateString(): string {
    return new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });
  }

  private getColorForLevel(level: LogLevel): string {
    switch (level) {
      case 'debug':
        return Color.FgCyan;
      case 'error':
        return Color.FgRed;
      case 'info':
      default:
        return Color.BgBlack;
    }
  }
}
