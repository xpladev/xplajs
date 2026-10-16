# xplajs

This project is a Typescript library for interacting with the XPLA blockchain. It facilitates easy querying and transaction execution on the XPLA blockchain. The project uses [Telescope](https://github.com/hyperweb-io/telescope) for automatic code generation and is compatible with [Hyperweb](https://hyperweb.io/)'s [interchainjs](https://github.com/hyperweb-io/interchainjs) and [interchain-kit](https://github.com/hyperweb-io/interchain-kit).

## Packages
### For query
- [@xpla/xplajs](/libs/xplajs/README.md)

### For transactions
- [@xpla/xpla](/networks/xpla/README.md)

## Build Instruction

### Git modules & Proto generate
```
$ pnpm proto
```

### Code generate xplajs & xpla-react
```sh
$ pnpm codegen
```
### Build
```sh
$ pnpm build
```

## v1.14.0 sources

Direct proto sources are pinned in `scripts/xpla.protod.config.json` to XPLA
`v1.14.0-rc4` and its effective `go.mod` dependencies, including the XPLA
Cosmos SDK and EVM forks. `pnpm proto` uses Telescope's downloader, which follows
Buf dependencies on their default branches and caches repositories under
`git-modules/`.
The Ethermint source is pinned to `v0.24.0-xpla`, preserving the existing proto
definitions and exports.

`pnpm codegen` regenerates both `@xpla/xplajs` and `@xpla/xpla-react`.
`@xpla/xpla` supplies transaction signing, and `@xpla/evm` supplies the rc4
precompile ABIs, including ICS20.
The default signer gas price is `10000000000000axpla`, matching the v1.14 upgrade
minimum. Dynamic deflation status uses `getDynamicDeflationStatus` and
`useGetDynamicDeflationStatus`, preserving the existing node status exports.

After building, run `pnpm test:module` to check published package imports.
For chain integration tests on Docker Desktop, use `pnpm starship:run` followed
by `pnpm test:starship`. For kind, run
`STARSHIP_KIND_CLUSTER=<cluster> pnpm starship:run` to load the image before
deployment. The runner reads the `image` of the chain named `xpla` from
`e2e/starship/configs/${STARSHIP_CONFIG:-config.yaml}`. Set that image to
`xplajs-starship-xpla:<version>` to build from `ghcr.io/xpladev/xpla:<version>`
and load the same image into kind, adding only `bash`, `jq`, and `curl` for the
Starship Helm chart. Update the image in each configuration you use when changing
node versions; the top-level YAML `version` selects the Helm chart. The released
node binary is unchanged. For other local clusters, build with
`pnpm starship:build` and load the image using your cluster's tools before running
Starship. CI creates a kind cluster and loads the image
automatically.
