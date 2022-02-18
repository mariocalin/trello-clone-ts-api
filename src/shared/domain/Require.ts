import { isNull, isUndefined } from 'lodash';

import { InvalidArgumentError } from './exception/InvalidArgumentError';

/**
 * Function that checks the value provided is defined (not null and not undefined)
 *
 * @param value Value
 * @param name Optional. Parameter name
 */
export function requireDefined<T>(value: T, name?: string): void {
  if (isNull(value) || isUndefined(value)) throw new InvalidArgumentError(`Value required for ${name} -> ${value}`);
}

/**
 * Function that checks the value for a string provided is not empty or whitespace
 *
 * @param value String value
 * @param name Optional. Parameter name
 */
export function requireNotEmpty(value: string, name?: string): void {
  requireDefined(value, name);

  if (value.trim().length === 0 || value === '')
    throw new InvalidArgumentError(`String must contain value for ${name} -> ${value}`);
}
