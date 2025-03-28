import { 
    Bank__factory, 
    Bech32__factory, 
    Distribution__factory, 
    Evidence__factory, 
    Gov__factory, 
    Ics20__factory, 
    Slashing__factory, 
    Staking__factory 
} from "./precompile";

const precompileAddresses = {
    Bank: "0x0000000000000000000000000000000000000804",
    Bech32: "0x0000000000000000000000000000000000000400",
    Distribution: "0x0000000000000000000000000000000000000801",
    Evidence: "0x0000000000000000000000000000000000000807",
    Gov: "0x0000000000000000000000000000000000000805",
    Ics20: "0x0000000000000000000000000000000000000802",
    Slashing: "0x0000000000000000000000000000000000000806",
    Staking: "0x0000000000000000000000000000000000000800",
};

export const PrecompileBank = Bank__factory.connect(precompileAddresses.Bank);
export const PrecompileBech32 = Bech32__factory.connect(precompileAddresses.Bech32);
export const PrecompileDistribution = Distribution__factory.connect(precompileAddresses.Distribution);
export const PrecompileEvidence = Evidence__factory.connect(precompileAddresses.Evidence);
export const PrecompileGov = Gov__factory.connect(precompileAddresses.Gov);
export const PrecompileIcs20 = Ics20__factory.connect(precompileAddresses.Ics20);
export const PrecompileSlashing = Slashing__factory.connect(precompileAddresses.Slashing);
export const PrecompileStaking = Staking__factory.connect(precompileAddresses.Staking);