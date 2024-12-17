"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateParams = exports.createUpdateParams = exports.useEthereumTx = exports.createEthereumTx = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createEthereumTx = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgEthereumTx.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgEthereumTx),
    converters: (0, utils_1.toConverters)(tx_1.MsgEthereumTx)
});
exports.createEthereumTx = createEthereumTx;
exports.useEthereumTx = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createEthereumTx
});
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
exports.useUpdateParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateParams
});
