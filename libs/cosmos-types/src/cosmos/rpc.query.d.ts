import { Rpc } from "../helpers";
export declare const createRPCQueryClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("./auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("./gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("./tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
    };
}>;
