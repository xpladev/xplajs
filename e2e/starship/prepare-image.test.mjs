import assert from 'node:assert/strict';
import { mkdtempSync, realpathSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, existsSync, symlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';

const source = dirname(fileURLToPath(import.meta.url));

function runBuild(t, { image = 'xplajs-starship-xpla:v9.8.7-test', config, cluster, dockerExit = 0, kindExit = 0 } = {}) {
  const root = realpathSync(mkdtempSync(join(tmpdir(), 'xplajs-image-test-')));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'starship/configs'), { recursive: true });
  mkdirSync(join(root, 'bin'));
  symlinkSync(resolve(source, '../node_modules'), join(root, 'node_modules'));
  copyFileSync(resolve(source, '../package.json'), join(root, 'package.json'));
  copyFileSync(join(source, 'prepare-image.mjs'), join(root, 'starship/prepare-image.mjs'));
  writeFileSync(join(root, 'starship/configs/config.yaml'), 'version: v1.8.0\nchains:\n  - name: xpla\n    image: xplajs-starship-xpla:v1.2.3\n');
  writeFileSync(join(root, 'starship/configs', config ?? 'config.yaml'), `version: v1.8.0\nchains:\n  - name: other\n    image: ignored:latest\n  - name: xpla\n    image: ${image}\n`);
  const log = join(root, 'commands.jsonl');
  for (const [command, exitCode] of [['docker', dockerExit], ['kind', kindExit]]) {
    writeFileSync(join(root, 'bin', command), `#!${process.execPath}\nimport { appendFileSync } from 'node:fs';\nappendFileSync(${JSON.stringify(log)}, JSON.stringify([${JSON.stringify(command)}, ...process.argv.slice(2)]) + '\\n');\nprocess.exit(${exitCode});\n`, { mode: 0o755 });
  }
  const env = { ...process.env, PATH: `${join(root, 'bin')}:${process.env.PATH}` };
  delete env.STARSHIP_CONFIG;
  delete env.STARSHIP_KIND_CLUSTER;
  if (config) env.STARSHIP_CONFIG = config;
  if (cluster) env.STARSHIP_KIND_CLUSTER = cluster;
  const command = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).scripts['starship:build'];
  const result = spawnSync(command, { cwd: root, env, shell: true, encoding: 'utf8' });
  const calls = existsSync(log) ? readFileSync(log, 'utf8').trim().split('\n').map(line => JSON.parse(line)) : [];
  return { result, calls, root };
}

test('default YAML image determines the base version and Docker tag', t => {
  const { result, calls, root } = runBuild(t);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(calls, [['docker', 'build', '--build-arg', 'XPLA_VERSION=v9.8.7-test', '-t', 'xplajs-starship-xpla:v9.8.7-test', '-f', join(root, 'starship/Dockerfile'), join(root, 'starship')]]);
});

test('selected YAML image is also loaded into the selected kind cluster', t => {
  const { result, calls } = runBuild(t, { config: 'config.workflow.yaml', cluster: 'test-cluster' });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(calls[0][3], 'XPLA_VERSION=v9.8.7-test');
  assert.equal(calls[0][5], 'xplajs-starship-xpla:v9.8.7-test');
  assert.deepEqual(calls[1], ['kind', 'load', 'docker-image', '--name', 'test-cluster', 'xplajs-starship-xpla:v9.8.7-test']);
});

test('missing tag fails before Docker is invoked', t => {
  const { result, calls } = runBuild(t, { image: 'xplajs-starship-xpla' });
  assert.notEqual(result.status, 0);
  assert.deepEqual(calls, []);
});

test('Docker failure is propagated and prevents kind loading', t => {
  const { result, calls } = runBuild(t, { dockerExit: 17, cluster: 'test-cluster' });
  assert.equal(result.status, 17);
  assert.equal(calls.length, 1);
});

test('kind failure is propagated', t => {
  const { result } = runBuild(t, { kindExit: 19, cluster: 'test-cluster' });
  assert.equal(result.status, 19);
});
