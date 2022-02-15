/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenProxy, TokenProxyInterface } from "../TokenProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122073c7d3dbe79acd07cc0f5914e970bfa8c30db46adb26d11b058606e29e2378c264736f6c634300080b0033";

type TokenProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenProxy__factory extends ContractFactory {
  constructor(...args: TokenProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenProxy";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenProxy> {
    return super.deploy(overrides || {}) as Promise<TokenProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenProxy {
    return super.attach(address) as TokenProxy;
  }
  connect(signer: Signer): TokenProxy__factory {
    return super.connect(signer) as TokenProxy__factory;
  }
  static readonly contractName: "TokenProxy";
  public readonly contractName: "TokenProxy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenProxyInterface {
    return new utils.Interface(_abi) as TokenProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenProxy {
    return new Contract(address, _abi, signerOrProvider) as TokenProxy;
  }
}