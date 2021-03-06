/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TteokmillSparrowsMinterInterface extends ethers.utils.Interface {
  functions: {
    "ijm()": FunctionFragment;
    "mint()": FunctionFragment;
    "setLimit(uint256)": FunctionFragment;
    "withdrawIjm()": FunctionFragment;
    "nft()": FunctionFragment;
    "mintPrice()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "whitelist()": FunctionFragment;
    "limit()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setMintPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ijm", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawIjm",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "mintPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
  encodeFunctionData(functionFragment: "limit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ijm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawIjm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMintPrice",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class TteokmillSparrowsMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TteokmillSparrowsMinterInterface;

  functions: {
    ijm(overrides?: CallOverrides): Promise<[string]>;

    "ijm()"(overrides?: CallOverrides): Promise<[string]>;

    mint(overrides?: Overrides): Promise<ContractTransaction>;

    "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawIjm(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawIjm()"(overrides?: Overrides): Promise<ContractTransaction>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    "nft()"(overrides?: CallOverrides): Promise<[string]>;

    mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mintPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    whitelist(overrides?: CallOverrides): Promise<[string]>;

    "whitelist()"(overrides?: CallOverrides): Promise<[string]>;

    limit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ijm(overrides?: CallOverrides): Promise<string>;

  "ijm()"(overrides?: CallOverrides): Promise<string>;

  mint(overrides?: Overrides): Promise<ContractTransaction>;

  "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

  setLimit(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLimit(uint256)"(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawIjm(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawIjm()"(overrides?: Overrides): Promise<ContractTransaction>;

  nft(overrides?: CallOverrides): Promise<string>;

  "nft()"(overrides?: CallOverrides): Promise<string>;

  mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  whitelist(overrides?: CallOverrides): Promise<string>;

  "whitelist()"(overrides?: CallOverrides): Promise<string>;

  limit(overrides?: CallOverrides): Promise<BigNumber>;

  "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMintPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMintPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ijm(overrides?: CallOverrides): Promise<string>;

    "ijm()"(overrides?: CallOverrides): Promise<string>;

    mint(overrides?: CallOverrides): Promise<void>;

    "mint()"(overrides?: CallOverrides): Promise<void>;

    setLimit(_limit: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawIjm(overrides?: CallOverrides): Promise<void>;

    "withdrawIjm()"(overrides?: CallOverrides): Promise<void>;

    nft(overrides?: CallOverrides): Promise<string>;

    "nft()"(overrides?: CallOverrides): Promise<string>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    whitelist(overrides?: CallOverrides): Promise<string>;

    "whitelist()"(overrides?: CallOverrides): Promise<string>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    ijm(overrides?: CallOverrides): Promise<BigNumber>;

    "ijm()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: Overrides): Promise<BigNumber>;

    "mint()"(overrides?: Overrides): Promise<BigNumber>;

    setLimit(_limit: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawIjm(overrides?: Overrides): Promise<BigNumber>;

    "withdrawIjm()"(overrides?: Overrides): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    "nft()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(overrides?: CallOverrides): Promise<BigNumber>;

    "whitelist()"(overrides?: CallOverrides): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ijm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ijm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawIjm(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawIjm()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "whitelist()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
