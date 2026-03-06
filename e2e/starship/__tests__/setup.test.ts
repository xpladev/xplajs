import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ConfigContext, useRegistry } from 'starshipjs';

import { it, beforeAll } from 'vitest';

const __dirname = dirname(fileURLToPath(import.meta.url));

beforeAll(async () => {
  const configFile = join(__dirname, '..', 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile));
});

it('should ', () => {});
