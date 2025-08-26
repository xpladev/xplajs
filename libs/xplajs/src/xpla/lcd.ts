import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evm: {
        feemarket: {
          v1: new (await import("../cosmos/evm/feemarket/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        vm: {
          v1: new (await import("../cosmos/evm/vm/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    cosmwasm: {
      wasm: {
        v1: new (await import("../cosmwasm/wasm/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    ibc: {
      applications: {
        interchain_accounts: {
          host: {
            v1: new (await import("../ibc/applications/interchain_accounts/host/v1/query.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        transfer: {
          v1: new (await import("../ibc/applications/transfer/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      core: {
        channel: {
          v1: new (await import("../ibc/core/channel/v1/query.lcd")).LCDQueryClient({
            requestClient
          }),
          v2: new (await import("../ibc/core/channel/v2/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        client: {
          v1: new (await import("../ibc/core/client/v1/query.lcd")).LCDQueryClient({
            requestClient
          }),
          v2: new (await import("../ibc/core/client/v2/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        connection: {
          v1: new (await import("../ibc/core/connection/v1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    },
    xpla: {
      burn: {
        v1beta1: new (await import("./burn/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      reward: {
        v1beta1: new (await import("./reward/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      volunteer: {
        v1beta1: new (await import("./volunteer/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};