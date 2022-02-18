import { StringLimitedValue } from '../../shared/domain/value-object/StirngLimitedValue';

export const BOARD_NAME_LIMIT = 40;

export class BoardName extends StringLimitedValue {
  constructor(name: string) {
    super(name, BOARD_NAME_LIMIT);
  }
}
