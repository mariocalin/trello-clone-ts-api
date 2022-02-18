import { requireDefined } from '../Require';

export abstract class StringValue {
  private stringValue: string;

  constructor(value: string) {
    requireDefined(value, 'limit');

    this.stringValue = value;
  }

  get value(): string {
    return this.stringValue;
  }
}
