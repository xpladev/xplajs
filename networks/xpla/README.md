# @xpla/xpla

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

Transaction codec and client to communicate with any xpla blockchain.

## Usage
### Install
```sh
npm install @xpla/xpla
```
### Example
Taking `direct` signing mode as example.

```ts
import { XplaSigningClient } from "./signing-client"
import { EthSecp256k1HDWallet } from "./wallets/ethSecp256k1hd"
import { Network } from "./defaults"
import { createSend } from "@xpla/xplajs/cosmos/bank/v1beta1/tx.rpc.func"
import { MsgSend } from "@xpla/xplajs/cosmos/bank/v1beta1/tx"
import { StdFee } from "@interchainjs/types"

const wallet = EthSecp256k1HDWallet.fromMnemonic("<MNEMONIC>")
const signer = wallet.toGenericOfflineSigner("direct")
const client = await XplaSigningClient.connectWithSigner(Network.Mainnet.rpc, signer)

const send = createSend(client)

const msg: MsgSend = {
  amount: [{amount: "1", denom: "axpla"}],
  fromAddress: wallet.accounts[0].address,
  toAddress: "xpla1888g76xr3phk7qkfknnn8hvxyzfj0e2vuh4jmw"
}

const fee: StdFee = {
  amount: [{amount: "28000000000000000", denom: "axpla"}],
  gas: "100000"
}

const tx = await send(wallet.accounts[0].address, msg, fee, "<MEMO>")
console.log(tx.hash) // the hash of TxRaw
```

Taking `amino` signing mode as example.

```ts
import { XplaSigningClient } from "./signing-client"
import { EthSecp256k1HDWallet } from "./wallets/ethSecp256k1hd"
import { Network } from "./defaults"
import { createSend } from "xplajs/cosmos/bank/v1beta1/tx.rpc.func"
import { MsgSend } from "xplajs/cosmos/bank/v1beta1/tx"
import { StdFee } from "@interchainjs/types"

const wallet = EthSecp256k1HDWallet.fromMnemonic("<MNEMONIC>")
const signer = wallet.toGenericOfflineSigner("amino")
const client = await XplaSigningClient.connectWithSigner(Network.Mainnet.rpc, signer)

const send = createSend(client)

const msg: MsgSend = {
  amount: [{amount: "1", denom: "axpla"}],
  fromAddress: wallet.accounts[0].address,
  toAddress: "xpla1888g76xr3phk7qkfknnn8hvxyzfj0e2vuh4jmw"
}

const fee: StdFee = {
  amount: [{amount: "28000000000000000", denom: "axpla"}],
  gas: "100000"
}

const tx = await send(wallet.accounts[0].address, msg, fee, "<MEMO>")
console.log(tx.hash) // the hash of TxRaw
```

- See [@interchainjs/auth](/packages/auth/README.md) to construct `<AUTH>`

## Implementations

- **direct signer** from `@interchainjs/xpla/signers/direct`
- **amino signer** from `@interchainjs/xpla/signers/amino`

## License

MIT License (MIT) & Apache License
