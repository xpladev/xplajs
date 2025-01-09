import { IAminoGenericOfflineSigner, IDirectGenericOfflineSigner, isOfflineAminoSigner, isOfflineDirectSigner, OfflineAminoSigner, OfflineDirectSigner, OfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { HttpEndpoint, SIGN_MODE } from "@interchainjs/types";
import { SigningClient } from "@interchainjs/cosmos/signing-client"
import { SignerOptions } from "@interchainjs/cosmos/types";
import { RpcClient } from '@interchainjs/cosmos/query/rpc';
import { AminoSigner } from "./signers/amino";
import { DirectSigner } from "./signers/direct";
import { ICosmosGenericOfflineSigner } from "@interchainjs/cosmos/types/wallet";
import { defaultAccountParser, defaultSignerOptions } from "./defaults";


/**
 * signingClient for xpla
 */
export class XplaSigningClient extends SigningClient {
  static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: ICosmosGenericOfflineSigner,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ): Promise<XplaSigningClient> {
    const rpcClient = new RpcClient(endpoint, options.prefix)

    rpcClient.setAccountParser(defaultAccountParser)

    const signingClient = new XplaSigningClient(
      rpcClient,
      signer,
      options
    )

    await signingClient.connect();

    return signingClient;
  }

  override async connect() {
    let signers;

    switch (this.offlineSigner.signMode) {
      case SIGN_MODE.DIRECT:
        signers = await DirectSigner.fromWalletToSigners(
          this.offlineSigner as IDirectGenericOfflineSigner,
          this.encoders,
          this.endpoint,
          this.options,
        )
        break;

      case SIGN_MODE.AMINO:
        signers = await AminoSigner.fromWalletToSigners(
          this.offlineSigner as IAminoGenericOfflineSigner,
          this.encoders,
          this.converters,
          this.endpoint,
          this.options,
        );
        break;

      default:
        break;
    }

    for (const signer of signers) {
      this.signers[await signer.getAddress()] = signer;
    }
  }
}
