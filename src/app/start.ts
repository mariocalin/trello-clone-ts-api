import * as dotenv from 'dotenv-flow';
import * as env from 'env-var';
import { ConfigurationFactory, stringToConfigurationLoadModuleEnum } from './configuration';
import { App } from './app';

// Initialize dotenv configuration to load ENV file
dotenv.config();

// Create configuration provider
const confiugurationModeValue = env.get('CONFIGURATION_MODE').required().asString();
const configurationProvider = ConfigurationFactory.from(
  stringToConfigurationLoadModuleEnum(confiugurationModeValue)
).createConfigurationProvider();

// Configuration file
const configuration = configurationProvider.provide();

// Create app instance
const app = new App(configuration);

// Run app instance
app.start().catch(handleError);

// Log errors
process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});

function handleError(e: any) {
  console.log(e);
  process.exit(1);
}
