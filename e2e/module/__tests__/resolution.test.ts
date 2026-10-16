import { execFileSync, execSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, test, beforeAll, afterAll } from "vitest";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../../..");

interface PackageDef {
  name: string;
  dir: string;
  peerDeps: string[];
  subpaths: string[];
}

const PACKAGES: PackageDef[] = [
  {
    name: "@xpla/xplajs",
    dir: "libs/xplajs",
    peerDeps: [],
    subpaths: [
      ".",
      "./helpers",
      "./registry",
      "./cosmos/bank/v1beta1/tx",
      "./cosmwasm/wasm/v1/tx",
      "./xpla/volunteer/v1beta1/tx",
      "./xpla/dynamicdeflation/v1beta1/query.rpc.func",
      "./ethermint/types/v1/account",
    ],
  },
  {
    name: "@xpla/evm",
    dir: "networks/evm",
    peerDeps: ["viem@2"],
    subpaths: [".", "./precompiles"],
  },
  {
    name: "@xpla/xpla",
    dir: "networks/xpla",
    peerDeps: [],
    subpaths: ["."],
  },
  {
    name: "@xpla/xpla-react",
    dir: "libs/xpla-react",
    peerDeps: ["@tanstack/react-query@4", "react@18", "react-dom@18"],
    subpaths: [".", "./xpla/dynamicdeflation/v1beta1/query.rpc.react"],
  },
];

const EXTERNAL_PACKAGES = [
  "react",
  "react-dom",
  "@tanstack/react-query",
];

const run = (cmd: string, opts: Record<string, unknown> = {}) =>
  execSync(cmd, { encoding: "utf-8", stdio: "pipe", ...opts }).toString().trim();

let tmpDir: string;
let packDir: string;

function specifier(pkgName: string, subpath: string): string {
  return subpath === "." ? pkgName : `${pkgName}/${subpath.replace("./", "")}`;
}

function buildCases(): [string, string][] {
  const cases: [string, string][] = [];
  for (const pkg of PACKAGES) {
    for (const sub of pkg.subpaths) {
      cases.push([pkg.name, sub]);
    }
  }
  return cases;
}

const allCases = buildCases();

beforeAll(() => {
  packDir = mkdtempSync(join(tmpdir(), "xplajs-tgz-"));
  const tgzPaths: string[] = [];

  for (const pkg of PACKAGES) {
    const pkgDir = join(ROOT, pkg.dir);
    const tgzLine = run(`pnpm pack --pack-destination ${packDir}`, {
      cwd: pkgDir,
    });
    tgzPaths.push(tgzLine.split("\n").pop()!);
  }

  tmpDir = mkdtempSync(join(tmpdir(), "xplajs-e2e-"));
  run(`npm init -y`, { cwd: tmpDir });

  const allInstalls = [
    ...tgzPaths,
    ...new Set(PACKAGES.flatMap((p) => p.peerDeps)),
    "esbuild",
  ];
  run(`npm install --install-strategy=nested ${allInstalls.join(" ")}`, {
    cwd: tmpDir,
    timeout: 120_000,
  });
}, 180_000);

afterAll(() => {
  if (tmpDir) rmSync(tmpDir, { recursive: true, force: true });
  if (packDir) rmSync(packDir, { recursive: true, force: true });
});

describe("ESM (esbuild bundle)", () => {
  test.each(allCases)("%s subpath %s", (pkgName, subpath) => {
    const spec = specifier(pkgName, subpath);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const entryFile = join(tmpDir, `entry-esm-${id}.mjs`);

    writeFileSync(
      entryFile,
      `import * as mod from ${JSON.stringify(spec)};
console.log(Object.keys(mod).length);
`
    );

    // esbuild --bundle resolves like a real bundler (vite/webpack use same algorithm)
    const externals = EXTERNAL_PACKAGES.map((p) => `--external:${p}`).join(" ");
    run(
      `./node_modules/.bin/esbuild ${entryFile} --bundle --format=esm --outfile=/dev/null --platform=node ${externals}`,
      { cwd: tmpDir }
    );
  });
});

describe("CJS (esbuild bundle)", () => {
  test.each(allCases)("%s subpath %s", (pkgName, subpath) => {
    const spec = specifier(pkgName, subpath);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const entryFile = join(tmpDir, `entry-cjs-${id}.cjs`);

    writeFileSync(
      entryFile,
      `const mod = require(${JSON.stringify(spec)});
console.log(Object.keys(mod).length);
`
    );

    const externals = EXTERNAL_PACKAGES.map((p) => `--external:${p}`).join(" ");
    run(
      `./node_modules/.bin/esbuild ${entryFile} --bundle --format=cjs --outfile=/dev/null --platform=node ${externals}`,
      { cwd: tmpDir }
    );
  });
});

describe("Node.js native CJS (require)", () => {
  test.each(allCases)("%s subpath %s", (pkgName, subpath) => {
    const spec = specifier(pkgName, subpath);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const testFile = join(tmpDir, `test-cjs-${id}.cjs`);

    writeFileSync(
      testFile,
      `const mod = require(${JSON.stringify(spec)});
const keys = Object.keys(mod);
if (keys.length === 0) { process.exit(1); }
`
    );

    run(`node ${testFile}`, { cwd: tmpDir });
  });
});

describe("v1.14 public API", () => {
  test("isolates dynamic deflation hook caches from existing modules", () => {
    execFileSync(process.execPath, ["-e", `
      const assert = require('node:assert/strict');
      const sdkRequire = require('node:module').createRequire(require.resolve('@xpla/xpla-react'));
      const React = sdkRequire('react');
      const { renderToString } = sdkRequire('react-dom/server');
      const { QueryClient, QueryClientProvider } = sdkRequire('@tanstack/react-query');
      const dynamic = require('@xpla/xpla-react/xpla/dynamicdeflation/v1beta1/query.rpc.react');
      const node = require('@xpla/xpla-react/cosmos/base/node/v1beta1/query.rpc.react');
      const fees = require('@xpla/xpla-react/cosmos/evm/feemarket/v1/query.rpc.react');
      for (const [existingHook, newHook, cached] of [
        [node.useGetStatus, dynamic.useGetDynamicDeflationStatus, { height: '100' }],
        [fees.useGetParams, dynamic.useGetParams, { params: { baseFee: '1000' } }],
      ]) {
        const queryClient = new QueryClient({ defaultOptions: { queries: { cacheTime: Infinity } } });
        function View() {
          const existing = existingHook({ request: {}, options: { enabled: false, initialData: cached } });
          const added = newHook({ request: {}, options: { enabled: false } });
          assert.equal(existing.data, cached);
          assert.equal(added.data, undefined);
          return null;
        }
        try {
          renderToString(React.createElement(QueryClientProvider, { client: queryClient }, React.createElement(View)));
          assert.equal(queryClient.getQueryCache().getAll().length, 2);
        } finally {
          queryClient.clear();
        }
      }
    `], { cwd: tmpDir, stdio: "pipe" });
  });

  test("keeps node status exports alongside dynamic deflation queries", () => {
    execFileSync(process.execPath, ["-e", `
      const assert = require('node:assert/strict');
      for (const name of ['@xpla/xplajs', '@xpla/xpla-react']) {
        const sdk = require(name);
        assert.equal(sdk.getStatus, require(name + '/cosmos/base/node/v1beta1/query.rpc.func').getStatus);
        assert.equal(typeof sdk.getDynamicDeflationStatus, 'function');
      }
      assert.equal(typeof require('@xpla/xpla-react').useGetStatus, 'function');
    `], { cwd: tmpDir, stdio: "pipe" });
  });

  test("exports the rc4 ICS20 precompile from both entrypoints", () => {
    execFileSync(process.execPath, ["-e", `
      const assert = require('node:assert/strict');
      for (const name of ['@xpla/evm', '@xpla/evm/precompiles']) {
        const { ics20 } = require(name);
        assert.equal(ics20.address, '0x0000000000000000000000000000000000000802');
        assert(ics20.abi.some(entry => entry.type === 'function' && entry.name === 'transfer'));
      }
    `], { cwd: tmpDir, stdio: "pipe" });
  });

  test("uses the minimum gas price set by the v1.14 upgrade", () => {
    execFileSync(process.execPath, ["-e", `
      const assert = require('node:assert/strict');
      const { DEFAULT_COSMOS_EVM_SIGNER_CONFIG } = require('@xpla/xpla');
      assert.equal(DEFAULT_COSMOS_EVM_SIGNER_CONFIG.gasPrice, '10000000000000axpla');
    `], { cwd: tmpDir, stdio: "pipe" });
  });
});
