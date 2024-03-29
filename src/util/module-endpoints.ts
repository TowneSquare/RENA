// Purpose: Contains the module endpoints, function names and coin endpoints for the Renegade Network

import { AccountAddressInput, Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { Network } from "aptos";

// module endpoints
export const RENA_MODULE_TESTNET = "0xa408eaf6de821be63ec47b5da16cbb5a3ab1af6a351d0bab7b6beddaf7802776::core";
export const RENA_PRESALE_MODULE_TESTNET = "0xa408eaf6de821be63ec47b5da16cbb5a3ab1af6a351d0bab7b6beddaf7802776::presale";
export const RENA_MODULE_MAINNET = "<address>::core";
export const RENA_PRESALE_MODULE_MAINNET = "<address>::presale";

// function names
export const CLAIM = "claim";
export const LIQUIFY = "liquify";

// coin endpoints
export const RENA_COIN_TYPE_TESTNET = "0xa408eaf6de821be63ec47b5da16cbb5a3ab1af6a351d0bab7b6beddaf7802776::core::RenegadeCoin"
export const LIQUID_COIN_OBJECT_TESTNET = "0x3ff43e3d26d8db230c2f2cbc8770bac9e5b9f0dae123d793e98bf526dd09f1e8"

export const COLLECTION_ID = "0x5c46c8d140591dcf70e282386c481f63af6e7385bd7ceabcbf02d40db3843c84"
export const COLLECTION_ADDRESS: AccountAddressInput = "0x5c46c8d140591dcf70e282386c481f63af6e7385bd7ceabcbf02d40db3843c84"
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
export const APTOS = new Aptos(aptosConfig); 

export const ONE_RENEGADES = 100_000_000;