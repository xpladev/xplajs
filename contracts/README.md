# @xplajs/contracts

XPLA precompiled contract interfaces and types for Solidity projects.

## Installation

### For Foundry/Forge Projects

```bash
forge install xpladev/xplajs
```

After installation, create or add to your project's `remappings.txt` file:
```txt
@xpla/contracts/=lib/xplajs/contracts/
```

**Note**: You need to create this file in your Forge project root directory, not in this package.

### For Hardhat/Truffle Projects

```bash
npm install @xpla/contracts
# or
yarn add @xpla/contracts
```

## Usage

### Import in Solidity

```solidity
import "@xpla/contracts/interfaces/IAuth.sol";
import "@xpla/contracts/common/Types.sol";
```

### Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import precompiled contract interfaces
import "@xpla/contracts/interfaces/IAuth.sol";
import "@xpla/contracts/interfaces/IBank.sol";

contract MyContract {
    // Use the imported interfaces
    IAuth public auth;
    IBank public bank;
    
    constructor() {
        // Initialize with precompiled contract addresses using constants from interfaces
        auth = IAuth(IAuth.AUTH_PRECOMPILE_ADDRESS);
        bank = IBank(IBank.BANK_PRECOMPILE_ADDRESS);
    }
    
    function getAccountInfo(address user) external view returns (string memory) {
        return auth.account(user);
    }
    
    function getBalance(address user) external view returns (uint256) {
        return bank.balanceOf(user);
    }
}
```

## Available Contracts

### Core Interfaces
- `IAuth` - Authentication and account management
- `IBank` - Banking and token operations  
- `IWasm` - CosmWasm contract support
- `StakingI` - Staking operations
- `DistributionI` - Distribution and rewards
- `IGov` - Governance operations
- `ISlashing` - Slashing operations

### Utilities
- `Bech32I` - Bech32 address encoding/decoding

## Type Definitions

The package includes common type definitions used across contracts:
- `common/Types.sol` - Shared types used across contracts
- `util/Types.sol` - Utility-specific types

## License

MIT
