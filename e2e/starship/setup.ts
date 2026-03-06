import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ConfigContext, useRegistry } from 'starshipjs';
import { beforeAll } from 'vitest';

beforeAll(async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const configFile = join(__dirname, 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile));
});
