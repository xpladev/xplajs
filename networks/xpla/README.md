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
import { EthSecp256k1Auth } from "@interchainjs/auth/ethSecp256k1"
import { HDPath } from "@interchainjs/types";
import { Network } from "@xpla/xpla/defaults"
import { DirectSigner } from "@xpla/xpla/signers/direct"
import { toEncoders } from "@interchainjs/cosmos/utils"
import { MsgSend } from "@xpla/xplajs/cosmos/bank/v1beta1/tx"
import { StdFee } from "@interchainjs/types"
import { MessageComposer } from "@xpla/xplajs/cosmos/bank/v1beta1/tx.registry"

const [auth] = EthSecp256k1Auth.fromMnemonic("<MNEMONIC>", [HDPath.eth().toString()])
const signer = new DirectSigner(auth, toEncoders(MsgSend), Network.Testnet.rpc)

const msg = MsgSend.fromPartial({
  amount: [{amount: "1", denom: "axpla"}],
  fromAddress: wallet.accounts[0].address,
  toAddress: "xpla1888g76xr3phk7qkfknnn8hvxyzfj0e2vuh4jmw"
})

const fee: StdFee = {
  amount: [{amount: "28000000000000000", denom: "axpla"}],
  gas: "100000"
}

const { send } = MessageComposer.fromPartial
const msgs = [send(msg)]

const fee: StdFee = await signer.estimateFee({messages: [msgs]})

const res = await signer.signAndBroadcast({messages: [msgs], fee})
console.log(res.hash) // the hash of TxRaw
```

Taking `amino` signing mode as example.

```ts
import { EthSecp256k1Auth } from "@interchainjs/auth/ethSecp256k1"
import { HDPath } from "@interchainjs/types";
import { Network } from "@xpla/xpla/defaults"
import { AminoSigner } from "@xpla/xpla/signers/amino"
import { toEncoders } from "@interchainjs/cosmos/utils"
import { MsgSend } from "@xpla/xplajs/cosmos/bank/v1beta1/tx"
import { StdFee } from "@interchainjs/types"
import { MessageComposer } from "@xpla/xplajs/cosmos/bank/v1beta1/tx.registry"

const [auth] = EthSecp256k1Auth.fromMnemonic("<MNEMONIC>", [HDPath.eth().toString()])
const signer = new AminoSigner(auth, toEncoders(MsgSend), toConverters(MsgSend), Network.Testnet.rpc)

const msg = MsgSend.fromPartial({
  amount: [{amount: "1", denom: "axpla"}],
  fromAddress: wallet.accounts[0].address,
  toAddress: "xpla1888g76xr3phk7qkfknnn8hvxyzfj0e2vuh4jmw"
})

const fee: StdFee = {
  amount: [{amount: "28000000000000000", denom: "axpla"}],
  gas: "100000"
}

const { send } = MessageComposer.fromPartial
const msgs = [send(msg)]

const fee: StdFee = await signer.estimateFee({messages: [msgs]})

const res = await signer.signAndBroadcast({messages: [msgs], fee})
console.log(res.hash) // the hash of TxRaw
```

Taking `PrecompileContract` bank as example
```ts
import { JsonRpcProvider } from "ethers";
import { PrecompileBank } from "@xpla/xpla/evm";

const provider = new JsonRpcProvider(Network.Testnet.evm);
const bank = PrecompileBank.connect(provider);

const totalSupply = await bank.totalSupply();
console.log(totalSupply)

```

## Implementations

- **direct signer** from `@xpla/xpla/signers/direct`
- **amino signer** from `@xpla/xpla/signers/amino`

## License

MIT License (MIT) & Apache License
