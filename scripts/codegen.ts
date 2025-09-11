import { TelescopeInput } from '@hyperweb/telescope';
import telescope from '@hyperweb/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';
import deepmerge from 'deepmerge';
import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync } from 'fs';

export const options: TelescopeInput = {
  protoDirs: [],
  outPath: '',
  options: {
    "classesUseArrowFunctions": true,
    "env": "v-next",
    "useInterchainJs": true,
    "useSDKTypes": false,
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": true,
      "enabled": true,
      "parser": {
        "keepCase": false
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": true,
        "fromAmino": true,
        "fromProto": false,
        "toProto": false,
      },
      "addTypeUrlToDecoders": false,
      "addTypeUrlToObjects": true,
      "addAminoTypeToObjects": true,
      "typingsFormat": {
        "duration": "duration",
        "timestamp": "date",
        "useExact": false,
        "useDeepPartial": true,
        "num64": "bigint",
        "customTypes": {
          "useCosmosSDKDec": true,
          "useEnhancedDecimal": false
        },
        "useTelescopeGeneratedType": true,
        "autoFixUndefinedEnumDefault": true
      }
    },
    "bundle": {
      "enabled": true,
      type: "module"
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    },
    "helperFunctions": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "hooks": {
        "react": false,
        "vue": false
      },
      nameMappers: {
        Query: {
          "cosmos.tx.v1beta1.GetTx": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetTxsEvent": {
            funcBody: "unchanged"
          },
          "cosmos.tx.v1beta1.GetBlockWithTxs": {
            funcBody: "unchanged"
          },
        },
      },
    },
    "interfaces": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "registerAllDecodersToGlobal": false,
      "useUnionTypes": true
    },
    "aminoEncoding": {
      "enabled": true,
      "useLegacyInlineEncoding": false,
      "disableMsgTypes": false,
      "useProtoOptionality": true,
      "customTypes": {
        "useCosmosSDKDec": true
      }
    }
  }
};

rimraf(join(__dirname, '../libs/cosmos-types/src'));

rimraf(join(__dirname, '../libs/xpla-react/src'));
rimraf(join(__dirname, '../libs/xplajs/src'));

const useModules = [
  "cosmos.auth.v1beta1",
  "cosmos.authz.v1beta1",
  "cosmos.bank.v1beta1",
  "cosmos.base.node.v1beta1",
  "cosmos.base.tendermint.v1beta1",
  "cosmos.consensus.v1",
  "cosmos.distribution.v1beta1",
  "cosmos.evidence.v1beta1",
  "cosmos.evm.feemarket.v1",
  "cosmos.evm.vm.v1",
  "cosmos.feegrant.v1beta1",
  "cosmos.gov.v1",
  "cosmos.gov.v1beta1",
  "cosmos.mint.v1beta1",
  "cosmos.slashing.v1beta1",
  "cosmos.staking.v1beta1",
  "cosmos.tx.v1beta1",
  "cosmos.upgrade.v1beta1",
  "cosmwasm.wasm.v1",
  "ibc.application.interchain_accounts.controller.v1",
  "ibc.applications.interchain_accounts.host.v1",
  "ibc.applications.interchain_accounts.transfer.v1",
  "ibc.applications.transfer.v1",
  "ibc.core.channel.v1",
  "ibc.core.channel.v2",
  "ibc.core.client.v1",
  "ibc.core.client.v2",
  "ibc.core.connection.v1",
  "ibc.core.connection.v2",
  "ibc.core.port.v1",
  "ibc.lightclients.cosmos.v1",
  "ibc.lightclients.evm.v1",
  "xpla.burn.v1beta1",
  "xpla.reward.v1beta1",
  "xpla.volunteer.v1beta1",
  "xpla.reward.v1beta1",
]

// xplajs
telescope({
  protoDirs: [join(__dirname, '../protos/xplajs')],
  outPath: join(__dirname, '../libs/xplajs/src'),
  options: deepmerge(options.options, {
    "lcdClients": {
      "enabled": true,
      "scoped": [
        {
          "dir": "xpla",
          packages: useModules,
          addToBundle:true,
        }
      ]
    },
    "rpcClients": {
      "enabled": true,
      "scoped": [
        {
          "dir": "xpla",
          packages: useModules,
          addToBundle:true,
        }
      ]
    },
  })
})
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// xpla-react
telescope({
  protoDirs: [join(__dirname, '../protos/xplajs')],
  outPath: join(__dirname, '../libs/xpla-react/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "react": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });