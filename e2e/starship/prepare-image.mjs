import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig } from '@starship-ci/cli/utils.js';

const directory = dirname(fileURLToPath(import.meta.url));
const config = resolve(directory, 'configs', process.env.STARSHIP_CONFIG || 'config.yaml');
const { starship } = loadConfig({ config });
const image = starship.chains?.find(chain => chain.name === 'xpla')?.image;
const version = typeof image === 'string' && /^xplajs-starship-xpla:([\w][\w.-]{0,127})$/.exec(image)?.[1];

if (!version) {
  throw new Error(`Expected XPLA image xplajs-starship-xpla:<tag> in ${config}`);
}

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run('docker', [
  'build', '--build-arg', `XPLA_VERSION=${version}`, '-t', image,
  '-f', resolve(directory, 'Dockerfile'), directory,
]);

if (process.env.STARSHIP_KIND_CLUSTER) {
  run('kind', ['load', 'docker-image', '--name', process.env.STARSHIP_KIND_CLUSTER, image]);
}
