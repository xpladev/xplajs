import { TelescopeInput } from '@hyperweb/telescope';
import telescope from '@hyperweb/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';
import deepmerge from 'deepmerge';
import { readFileSync, writeFileSync, existsSync, mkdirSync, cpSync } from 'fs';

/**
 * Preserves the interchain/core directory before rimraf
 */
function preserveInterchainCore(srcPath: string, tempPath: string) {
  const interchainCorePath = join(srcPath, 'interchain');
  if (existsSync(interchainCorePath)) {
    console.log('📦 preserving interchain/core directory...');
    cpSync(interchainCorePath, tempPath, { recursive: true });
    return true;
  }
  return false;
}

/**
 * Restores the interchain/core directory after telescope generation
 */
function restoreInterchainCore(srcPath: string, tempPath: string) {
  if (existsSync(tempPath)) {
    console.log('📦 restoring interchain/core directory...');
    const interchainPath = join(srcPath, 'interchain');
    if (!existsSync(interchainPath)) {
      mkdirSync(interchainPath, { recursive: true });
    }
    cpSync(tempPath, interchainPath, { recursive: true });
    rimraf(tempPath); // Clean up temp directory
  }
}

/**
 * Adds the interchain core export to the generated index.ts file
 * This ensures getSigner and other core utilities are exported from the main package
 */
function addInterchainCoreExport(indexPath: string) {
  try {
    const content = readFileSync(indexPath, 'utf8');
    const exportLine = 'export * from "./interchain/core";';

    // Check if the export line already exists
    if (content.includes(exportLine)) {
      console.log('✨ interchain/core export already exists in index.ts');
      return;
    }

    // Add the export line at the end
    const updatedContent = content + exportLine + '\n';
    writeFileSync(indexPath, updatedContent, 'utf8');
    console.log('✨ added interchain/core export to index.ts');
  } catch (error) {
    console.error('Failed to add interchain/core export:', error);
  }
}

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

// Preserve interchain/core before deleting interchainjs/src
const interchainJsSrcPath = join(__dirname, '../libs/xplajs/src');
const tempInterchainPath = join(__dirname, '../temp-xplacore');
const hasInterchainCore = preserveInterchainCore(interchainJsSrcPath, tempInterchainPath);

rimraf(interchainJsSrcPath);
rimraf(join(__dirname, '../libs/xpla-react/src'));
rimraf(join(__dirname, '../libs/xplajs/src'));

// xplajs
telescope({
  protoDirs: [join(__dirname, '../protos/xplajs')],
  outPath: join(__dirname, '../libs/xplajs/src'),
  options: deepmerge(options.options, {
    "lcdClients": {
      "enabled": true
    },
    "rpcClients": {
      "enabled": true
    },
  })
})
  .then(() => {
    // Restore the interchain/core directory if it was preserved
    if (hasInterchainCore) {
      restoreInterchainCore(interchainJsSrcPath, tempInterchainPath);
    }

    // Add the interchain/core export after generation
    const indexPath = join(__dirname, '../libs/xplajs/src/index.ts');
    addInterchainCoreExport(indexPath);
    console.log('✨ all done!');
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