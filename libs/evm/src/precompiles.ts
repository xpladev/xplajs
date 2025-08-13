import { 
    IBank__factory, 
    Bech32I__factory, 
    DistributionI__factory, 
    IGov__factory, 
    ISlashing__factory, 
    StakingI__factory, 
    IAuth__factory,
    IWasm__factory
} from "./factories";

const precompileAddresses = {
    Auth: "0x1000000000000000000000000000000000000005",
    Bank: "0x1000000000000000000000000000000000000001",
    Wasm: "0x1000000000000000000000000000000000000004",
    P256: "0x0000000000000000000000000000000000000100",
    Bech32: "0x0000000000000000000000000000000000000400",
    Distribution: "0x0000000000000000000000000000000000000801",
    Gov: "0x0000000000000000000000000000000000000805",
    Slashing: "0x0000000000000000000000000000000000000806",
    Staking: "0x0000000000000000000000000000000000000800",
};

// Factory functions that return connected contract instances
export const createPrecompileAuth = (provider: any) => IAuth__factory.connect(precompileAddresses.Auth, provider);
export const createPrecompileBank = (provider: any) => IBank__factory.connect(precompileAddresses.Bank, provider);
export const createPrecompileWasm = (provider: any) => IWasm__factory.connect(precompileAddresses.Wasm, provider);
export const createPrecompileBech32 = (provider: any) => Bech32I__factory.connect(precompileAddresses.Bech32, provider);
export const createPrecompileDistribution = (provider: any) => DistributionI__factory.connect(precompileAddresses.Distribution, provider);
export const createPrecompileGov = (provider: any) => IGov__factory.connect(precompileAddresses.Gov, provider);
export const createPrecompileSlashing = (provider: any) => ISlashing__factory.connect(precompileAddresses.Slashing, provider);
export const createPrecompileStaking = (provider: any) => StakingI__factory.connect(precompileAddresses.Staking, provider);

// Export addresses for reference
export { precompileAddresses };

// Export a helper function to create all precompile contracts
export const createPrecompileContracts = (provider: any) => ({
    auth: createPrecompileAuth(provider),
    bank: createPrecompileBank(provider),
    wasm: createPrecompileWasm(provider),
    bech32: createPrecompileBech32(provider),
    distribution: createPrecompileDistribution(provider),
    gov: createPrecompileGov(provider),
    slashing: createPrecompileSlashing(provider),
    staking: createPrecompileStaking(provider),
});
