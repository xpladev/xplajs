import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      autocli: {
        v1: (await import("../cosmos/autocli/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        grpc: {
          v2: (await import("../cosmos/base/grpc/v2/service.rpc.Service")).createRpcQueryExtension(client)
        },
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    cosmwasm: {
      wasm: {
        v1: (await import("../cosmwasm/wasm/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    ethermint: {
      evm: {
        v1: (await import("../ethermint/evm/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feemarket: {
        v1: (await import("../ethermint/feemarket/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    ibc: {
      applications: {
        fee: {
          v1: (await import("../ibc/applications/fee/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        interchain_accounts: {
          controller: {
            v1: (await import("../ibc/applications/interchain_accounts/controller/v1/query.rpc.Query")).createRpcQueryExtension(client)
          },
          host: {
            v1: (await import("../ibc/applications/interchain_accounts/host/v1/query.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        transfer: {
          v1: (await import("../ibc/applications/transfer/v1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      core: {
        channel: {
          v1: (await import("../ibc/core/channel/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        client: {
          v1: (await import("../ibc/core/client/v1/query.rpc.Query")).createRpcQueryExtension(client)
        },
        connection: {
          v1: (await import("../ibc/core/connection/v1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      lightclients: {
        wasm: {
          v1: (await import("../ibc/lightclients/wasm/v1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      }
    },
    xpla: {
      reward: {
        v1beta1: (await import("./reward/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      volunteer: {
        v1beta1: (await import("./volunteer/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};