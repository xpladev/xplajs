import { AddrDerivation, Auth, SignerConfig } from '@interchainjs/types';

import { AminoDocSigner } from '../signers/amino';
import { defaultSignerOptions, defaultWalletOptions } from '../defaults';
import { DirectDocSigner } from '../signers/direct';
import { ICosmosAccount } from '@interchainjs/cosmos/types';
import { WalletOptions } from '@interchainjs/cosmos/types/wallet';
import { HDWallet } from '@interchainjs/cosmos/wallets/secp256k1hd';

/**
 * Cosmos HD Wallet for secp256k1
 */
export class EthSecp256k1HDWallet extends HDWallet {
  constructor(
    accounts: ICosmosAccount[],
    options: SignerConfig
  ) {
    const opts = { ...defaultSignerOptions.Cosmos, ...options };
    super(accounts, opts);
  }

  getDirectDocSigner(auth: Auth, config: SignerConfig): DirectDocSigner {
    return new DirectDocSigner(auth, config);
  }

  getAminoDocSigner(auth: Auth, config: SignerConfig): AminoDocSigner {
    return new AminoDocSigner(auth, config);
  }

  /**
   * Create a new HD wallet from mnemonic
   * @param mnemonic
   * @param derivations infos for derivate addresses
   * @param options wallet options
   * @returns HD wallet
   */
  static fromMnemonic(
    mnemonic: string,
    derivations: AddrDerivation[] = [{hdPath: "m/44'/60'/0'/0/0", prefix:"xpla"}],
    options: WalletOptions = {bip39Password: "", signerConfig: defaultSignerOptions.Cosmos}
  ) {
    const opts = { ...defaultWalletOptions, ...options };

    return super.fromMnemonic(mnemonic, derivations, opts);
  }
}
