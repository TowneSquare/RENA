import { useDispatch } from "react-redux";
import {
  APTOS,
  ONE_RENEGADES,
  RENA_COIN_TYPE_TESTNET,
} from "../util/module-endpoints";
import { updateRenaBalance } from "../state/renegades";
import { ViewRequest } from "@aptos-labs/ts-sdk";

const useTokenBalance = () => {
  const dispatch = useDispatch();

  const updateTokenBalance = async (accountAddress: string) => {
    const payload: ViewRequest = {
      function: "0x1::coin::balance",
      typeArguments: [RENA_COIN_TYPE_TESTNET],
      functionArguments: [accountAddress],
    };
    const res = await APTOS.view({
      payload,
    });
    dispatch(updateRenaBalance(parseInt(res[0] as any) / ONE_RENEGADES));
  };

  return updateTokenBalance;
};

export default useTokenBalance;
