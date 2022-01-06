import * as env from 'env-var';
import { ConfigurationLoadMode, ConfigurationProvider } from './ConfigurationProvider';
import { ConfigurationFromEnvProvider } from './providers/ConfigurationFromEnvProvider';
import { ConfigurationFromFileProvider } from './providers/ConfigurationFromFileProvider';

export class ConfigurationFactory {
  private constructor(private mode: ConfigurationLoadMode) {}

  public static from(mode: ConfigurationLoadMode): ConfigurationFactory {
    return new ConfigurationFactory(mode);
  }

  public createConfigurationProvider(): ConfigurationProvider {
    switch (this.mode) {
      case ConfigurationLoadMode.FILE:
        return new ConfigurationFromFileProvider(env.get('CONFIGURATION_FILE_PATH').required().asString());
      case ConfigurationLoadMode.PROCESS:
      default:
        return new ConfigurationFromEnvProvider();
    }
  }
}
