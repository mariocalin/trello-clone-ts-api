import { Configuration } from './Configuration';

export interface ConfigurationProvider {
  /**
   * Provide configuration
   */
  provide(): Configuration;
}

export enum ConfigurationLoadMode {
  PROCESS = 'PROCESS',
  FILE = 'FILE'
}

export function stringToConfigurationLoadModuleEnum(value: string): ConfigurationLoadMode {
  if (Object.values(ConfigurationLoadMode).some((modeValue: string) => modeValue === value))
    return <ConfigurationLoadMode>value;
  else throw Error(`Cannot cast invalid mode value ${value}`);
}
