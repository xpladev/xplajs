# @xpla/xplajs

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80">
</p>

<p align="center" width="100%">
  <!-- <a href="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/cosmology-tech/interchainjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a> -->
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/cosmology-tech/interchainjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

Query to communicate with any xpla blockchain.

## Usage
### Install

```sh
npm install @xpla/xplajs
```

### Example
```ts
import { createLCDClient } from "./xpla/lcd";

const lcd = await createLCDClient({restEndpoint: "https://cube-lcd.xpla.io"});

const res = await lcd.cosmos.auth.v1beta1.params()
console.log(res)
```