import {
  CosmosSignArgs,
  DocOptions as CosmosDocOptions,
} from '@interchainjs/cosmos/types';
import {
  CosmosAminoSigner,
  CosmosDirectSigner,
  UniCosmosBaseSigner,
} from '@interchainjs/cosmos/types';
import {
  BaseWalletAccount,
  Eip712Data,
  InjectiveDomain,
  InjectiveEip712Message,
} from '@interchainjs/types';

export type XplaDirectSigner = CosmosDirectSigner;
export type XplaAminoSigner = CosmosAminoSigner;
export type XplaEip712Signer = UniCosmosBaseSigner<XplaEip712Doc>;

export interface EthAccount extends BaseWalletAccount {
  cosmosAddress: string;
  ethereumAddress: string;
}

export type XplaEip712Doc = Eip712Data<
  InjectiveDomain,
  InjectiveEip712Message
>;

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

export type DocOptions = CosmosDocOptions & DomainOptions;

export interface DomainOptions {
  name?: string;
  version?: string;
  ethereumChainId?: EthereumChainId;
  salt?: string;
  verifyingContract?: string;
}
