import { Configuration } from '../Configuration';
import { ConfigurationProvider } from '../ConfigurationProvider';
import fs from 'fs';

export class ConfigurationFromFileProvider implements ConfigurationProvider {
  constructor(private filePath: string) {}

  provide(): Configuration {
    fs.readFileSync(this.filePath);
    throw new Error('Method not implemented.');
  }
}
