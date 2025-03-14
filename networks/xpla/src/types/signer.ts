import {
  CosmosSignArgs,
  DocOptions as CosmosDocOptions,
} from '@interchainjs/cosmos/types';
import {
  CosmosAminoSigner,
  CosmosDirectSigner,
} from '@interchainjs/cosmos/types';
import {
  BaseWalletAccount,
} from '@interchainjs/types';

export type XplaDirectSigner = CosmosDirectSigner;
export type XplaAminoSigner = CosmosAminoSigner;
export interface EthAccount extends BaseWalletAccount {
  cosmosAddress: string;
  ethereumAddress: string;
}

export type XplaEip712SignArgs = CosmosSignArgs<DocOptions>;

export enum EthereumChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Xpla = 37,
  Kovan = 42,
  XplaTestnet = 47,
  Ganache = 1337,
  HardHat = 31337,
}

export type DocOptions = CosmosDocOptions;