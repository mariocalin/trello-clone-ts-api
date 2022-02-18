import * as env from 'env-var';

import { Configuration } from '../Configuration';
import { ConfigurationProvider } from '../ConfigurationProvider';

export class ConfigurationFromEnvProvider implements ConfigurationProvider {
  provide(): Configuration {
    return {
      port: env.get('PORT').required().asPortNumber()
    };
  }
}
