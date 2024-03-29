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
  PayableOverrides,
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
} from "../../../../common";

export declare namespace MsgDataTypes {
  export type RouteInfoStruct = {
    sender: string;
    receiver: string;
    srcChainId: BigNumberish;
    srcTxHash: BytesLike;
  };

  export type RouteInfoStructOutput = [string, string, BigNumber, string] & {
    sender: string;
    receiver: string;
    srcChainId: BigNumber;
    srcTxHash: string;
  };

  export type TransferInfoStruct = {
    t: BigNumberish;
    sender: string;
    receiver: string;
    token: string;
    amount: BigNumberish;
    wdseq: BigNumberish;
    srcChainId: BigNumberish;
    refId: BytesLike;
    srcTxHash: BytesLike;
  };

  export type TransferInfoStructOutput = [
    number,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    t: number;
    sender: string;
    receiver: string;
    token: string;
    amount: BigNumber;
    wdseq: BigNumber;
    srcChainId: BigNumber;
    refId: string;
    srcTxHash: string;
  };
}

export interface IMessageBusInterface extends utils.Interface {
  functions: {
    "calcFee(bytes)": FunctionFragment;
    "executeMessage(bytes,(address,address,uint64,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "executeMessageWithTransfer(bytes,(uint8,address,address,address,uint256,uint64,uint64,bytes32,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "executeMessageWithTransferRefund(bytes,(uint8,address,address,address,uint256,uint64,uint64,bytes32,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "liquidityBridge()": FunctionFragment;
    "pegBridge()": FunctionFragment;
    "pegBridgeV2()": FunctionFragment;
    "pegVault()": FunctionFragment;
    "pegVaultV2()": FunctionFragment;
    "sendMessage(address,uint256,bytes)": FunctionFragment;
    "sendMessageWithTransfer(address,uint256,address,bytes32,bytes)": FunctionFragment;
    "withdrawFee(address,uint256,bytes[],address[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calcFee"
      | "executeMessage"
      | "executeMessageWithTransfer"
      | "executeMessageWithTransferRefund"
      | "liquidityBridge"
      | "pegBridge"
      | "pegBridgeV2"
      | "pegVault"
      | "pegVaultV2"
      | "sendMessage"
      | "sendMessageWithTransfer"
      | "withdrawFee"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "calcFee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "executeMessage",
    values: [
      BytesLike,
      MsgDataTypes.RouteInfoStruct,
      BytesLike[],
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [
      BytesLike,
      MsgDataTypes.TransferInfoStruct,
      BytesLike[],
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [
      BytesLike,
      MsgDataTypes.TransferInfoStruct,
      BytesLike[],
      string[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pegBridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pegBridgeV2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pegVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pegVaultV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageWithTransfer",
    values: [string, BigNumberish, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values: [string, BigNumberish, BytesLike[], string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "calcFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pegBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pegBridgeV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pegVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pegVaultV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMessageBus extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMessageBusInterface;

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
    calcFee(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    executeMessage(
      _message: BytesLike,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityBridge(overrides?: CallOverrides): Promise<[string]>;

    pegBridge(overrides?: CallOverrides): Promise<[string]>;

    pegBridgeV2(overrides?: CallOverrides): Promise<[string]>;

    pegVault(overrides?: CallOverrides): Promise<[string]>;

    pegVaultV2(overrides?: CallOverrides): Promise<[string]>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  executeMessage(
    _message: BytesLike,
    _route: MsgDataTypes.RouteInfoStruct,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _message: BytesLike,
    _transfer: MsgDataTypes.TransferInfoStruct,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _message: BytesLike,
    _transfer: MsgDataTypes.TransferInfoStruct,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityBridge(overrides?: CallOverrides): Promise<string>;

  pegBridge(overrides?: CallOverrides): Promise<string>;

  pegBridgeV2(overrides?: CallOverrides): Promise<string>;

  pegVault(overrides?: CallOverrides): Promise<string>;

  pegVaultV2(overrides?: CallOverrides): Promise<string>;

  sendMessage(
    _receiver: string,
    _dstChainId: BigNumberish,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessageWithTransfer(
    _receiver: string,
    _dstChainId: BigNumberish,
    _srcBridge: string,
    _srcTransferId: BytesLike,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(
    _account: string,
    _cumulativeFee: BigNumberish,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    executeMessage(
      _message: BytesLike,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeMessageWithTransferRefund(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityBridge(overrides?: CallOverrides): Promise<string>;

    pegBridge(overrides?: CallOverrides): Promise<string>;

    pegBridgeV2(overrides?: CallOverrides): Promise<string>;

    pegVault(overrides?: CallOverrides): Promise<string>;

    pegVaultV2(overrides?: CallOverrides): Promise<string>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    executeMessage(
      _message: BytesLike,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityBridge(overrides?: CallOverrides): Promise<BigNumber>;

    pegBridge(overrides?: CallOverrides): Promise<BigNumber>;

    pegBridgeV2(overrides?: CallOverrides): Promise<BigNumber>;

    pegVault(overrides?: CallOverrides): Promise<BigNumber>;

    pegVaultV2(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcFee(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeMessage(
      _message: BytesLike,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _message: BytesLike,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegBridgeV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegVaultV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageWithTransfer(
      _receiver: string,
      _dstChainId: BigNumberish,
      _srcBridge: string,
      _srcTransferId: BytesLike,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(
      _account: string,
      _cumulativeFee: BigNumberish,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
