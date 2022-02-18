import { requireDefined } from '../Require';
import { StringValue } from './StringValue';

export abstract class StringLimitedValue extends StringValue {
  constructor(stringValue: string, limit: number) {
    super(stringValue);
    requireDefined(limit, 'limit');
  }
}
