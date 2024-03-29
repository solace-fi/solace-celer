/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IPeggedTokenBridgeV2Interface extends utils.Interface {
  functions: {
    "burn(address,uint256,uint64,address,uint64)": FunctionFragment;
    "burnFrom(address,uint256,uint64,address,uint64)": FunctionFragment;
    "mint(bytes,bytes[],address[],uint256[])": FunctionFragment;
    "records(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "burn" | "burnFrom" | "mint" | "records"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "records", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "records", data: BytesLike): Result;

  events: {};
}

export interface IPeggedTokenBridgeV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPeggedTokenBridgeV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    burn(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnFrom(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      _request: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    records(recordId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
  };

  burn(
    _token: string,
    _amount: BigNumberish,
    _toChainId: BigNumberish,
    _toAccount: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnFrom(
    _token: string,
    _amount: BigNumberish,
    _toChainId: BigNumberish,
    _toAccount: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    _request: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    burn(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    burnFrom(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    mint(
      _request: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    burn(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnFrom(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      _request: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    records(recordId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnFrom(
      _token: string,
      _amount: BigNumberish,
      _toChainId: BigNumberish,
      _toAccount: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      _request: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    records(
      recordId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
