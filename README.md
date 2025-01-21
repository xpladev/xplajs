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
$ yarn proto
```

### Code generate xplajs & xpla-react
```sh
$ yarn codegen:xpla
```
### Build
```sh
$ yarn build
```
