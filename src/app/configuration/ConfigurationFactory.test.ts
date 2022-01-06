import {
  ConfigurationFactory,
  ConfigurationFromEnvProvider,
  ConfigurationFromFileProvider,
  ConfigurationLoadMode
} from '.';

describe('ConfigurationFactory', () => {
  it('Should create configuration from environment', () => {
    const factory = ConfigurationFactory.from(ConfigurationLoadMode.PROCESS);
    const provider = factory.createConfigurationProvider();
    expect(provider).toBeInstanceOf(ConfigurationFromEnvProvider);
  });

  it('Should create configuration from file', () => {
    const factory = ConfigurationFactory.from(ConfigurationLoadMode.FILE);
    const provider = factory.createConfigurationProvider();
    expect(provider).toBeInstanceOf(ConfigurationFromFileProvider);
  });
});
