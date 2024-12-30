import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolResponse } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  CommunityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
  /**
   * DepositValidatorRewardsPool defines a method to provide additional rewards
   * to delegators to a specific validator.
   * 
   * Since: cosmos-sdk 0.50
   */
  DepositValidatorRewardsPool(request: MsgDepositValidatorRewardsPool): Promise<MsgDepositValidatorRewardsPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
   for a delegator (or validator self-delegation). */
  SetWithdrawAddress = async (request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> => {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   from a single validator. */
  WithdrawDelegatorReward = async (request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> => {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
   full commission to the validator address. */
  WithdrawValidatorCommission = async (request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> => {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new BinaryReader(data)));
  };
  /* FundCommunityPool defines a method to allow an account to directly
   fund the community pool. */
  FundCommunityPool = async (request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> => {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defines a governance operation for updating the x/distribution
   module parameters. The authority is defined in the keeper.
  
   Since: cosmos-sdk 0.47 */
  UpdateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* CommunityPoolSpend defines a governance operation for sending tokens from
   the community pool in the x/distribution module to another account, which
   could be the governance module itself. The authority is defined in the
   keeper.
  
   Since: cosmos-sdk 0.47 */
  CommunityPoolSpend = async (request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse> => {
    const data = MsgCommunityPoolSpend.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
    return promise.then(data => MsgCommunityPoolSpendResponse.decode(new BinaryReader(data)));
  };
  /* DepositValidatorRewardsPool defines a method to provide additional rewards
   to delegators to a specific validator.
  
   Since: cosmos-sdk 0.50 */
  DepositValidatorRewardsPool = async (request: MsgDepositValidatorRewardsPool): Promise<MsgDepositValidatorRewardsPoolResponse> => {
    const data = MsgDepositValidatorRewardsPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "DepositValidatorRewardsPool", data);
    return promise.then(data => MsgDepositValidatorRewardsPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};