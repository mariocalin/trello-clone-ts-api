import { requireNotEmpty } from './Require';

/**
 * Class that represents a color
 */
export class Color {
  /** String that represents a color code */
  private code: string;

  constructor(code: string) {
    requireNotEmpty(code, 'code');

    this.code = code;
  }

  get colorCode() {
    return this.code;
  }
}
