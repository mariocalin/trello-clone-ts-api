import { v4 } from 'uuid';
import validate from 'uuid-validate';

import { InvalidArgumentError } from '../exception/InvalidArgumentError';

export class Uuid {
  readonly uuidValue: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);

    this.uuidValue = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  toString(): string {
    return this.uuidValue;
  }

  get value() {
    return this.uuidValue;
  }
}
