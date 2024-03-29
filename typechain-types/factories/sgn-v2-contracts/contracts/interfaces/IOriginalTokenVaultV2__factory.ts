/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOriginalTokenVaultV2,
  IOriginalTokenVaultV2Interface,
} from "../../../../sgn-v2-contracts/contracts/interfaces/IOriginalTokenVaultV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_mintChainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_mintAccount",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "recordId",
        type: "bytes32",
      },
    ],
    name: "records",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_request",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "_sigs",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOriginalTokenVaultV2__factory {
  static readonly abi = _abi;
  static createInterface(): IOriginalTokenVaultV2Interface {
    return new utils.Interface(_abi) as IOriginalTokenVaultV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOriginalTokenVaultV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOriginalTokenVaultV2;
  }
}
