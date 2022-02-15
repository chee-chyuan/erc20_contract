/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../ERC20Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611352806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c0c565b60405180910390f35b6100e660048036038101906100e19190610cc7565b610308565b6040516100f39190610d22565b60405180910390f35b61010461032b565b6040516101119190610d4c565b60405180910390f35b610134600480360381019061012f9190610d67565b610335565b6040516101419190610d22565b60405180910390f35b610152610364565b60405161015f9190610dd6565b60405180910390f35b610182600480360381019061017d9190610cc7565b61036d565b60405161018f9190610d22565b60405180910390f35b6101b260048036038101906101ad9190610df1565b610417565b6040516101bf9190610d4c565b60405180910390f35b6101d0610460565b6040516101dd9190610c0c565b60405180910390f35b61020060048036038101906101fb9190610cc7565b6104f2565b60405161020d9190610d22565b60405180910390f35b610230600480360381019061022b9190610cc7565b6105dc565b60405161023d9190610d22565b60405180910390f35b610260600480360381019061025b9190610e1e565b6105ff565b60405161026d9190610d4c565b60405180910390f35b60606036805461028590610e8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610e8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600080610313610686565b905061032081858561068e565b600191505092915050565b6000603554905090565b600080610340610686565b905061034d858285610859565b6103588585856108e5565b60019150509392505050565b60006012905090565b600080610378610686565b905061040c818585603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104079190610eee565b61068e565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606037805461046f90610e8d565b80601f016020809104026020016040519081016040528092919081815260200182805461049b90610e8d565b80156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b5050505050905090565b6000806104fd610686565b90506000603460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ba90610fb6565b60405180910390fd5b6105d0828686840361068e565b60019250505092915050565b6000806105e7610686565b90506105f48185856108e5565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f590611048565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561076e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610765906110da565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161084c9190610d4c565b60405180910390a3505050565b600061086584846105ff565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108df57818110156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c890611146565b60405180910390fd5b6108de848484840361068e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094c906111d8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bc9061126a565b60405180910390fd5b6109d0838383610b69565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4e906112fc565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610aec9190610eee565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b509190610d4c565b60405180910390a3610b63848484610b6e565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610bad578082015181840152602081019050610b92565b83811115610bbc576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bde82610b73565b610be88185610b7e565b9350610bf8818560208601610b8f565b610c0181610bc2565b840191505092915050565b60006020820190508181036000830152610c268184610bd3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5e82610c33565b9050919050565b610c6e81610c53565b8114610c7957600080fd5b50565b600081359050610c8b81610c65565b92915050565b6000819050919050565b610ca481610c91565b8114610caf57600080fd5b50565b600081359050610cc181610c9b565b92915050565b60008060408385031215610cde57610cdd610c2e565b5b6000610cec85828601610c7c565b9250506020610cfd85828601610cb2565b9150509250929050565b60008115159050919050565b610d1c81610d07565b82525050565b6000602082019050610d376000830184610d13565b92915050565b610d4681610c91565b82525050565b6000602082019050610d616000830184610d3d565b92915050565b600080600060608486031215610d8057610d7f610c2e565b5b6000610d8e86828701610c7c565b9350506020610d9f86828701610c7c565b9250506040610db086828701610cb2565b9150509250925092565b600060ff82169050919050565b610dd081610dba565b82525050565b6000602082019050610deb6000830184610dc7565b92915050565b600060208284031215610e0757610e06610c2e565b5b6000610e1584828501610c7c565b91505092915050565b60008060408385031215610e3557610e34610c2e565b5b6000610e4385828601610c7c565b9250506020610e5485828601610c7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ea557607f821691505b60208210811415610eb957610eb8610e5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ef982610c91565b9150610f0483610c91565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3957610f38610ebf565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610fa0602583610b7e565b9150610fab82610f44565b604082019050919050565b60006020820190508181036000830152610fcf81610f93565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611032602483610b7e565b915061103d82610fd6565b604082019050919050565b6000602082019050818103600083015261106181611025565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006110c4602283610b7e565b91506110cf82611068565b604082019050919050565b600060208201905081810360008301526110f3816110b7565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611130601d83610b7e565b915061113b826110fa565b602082019050919050565b6000602082019050818103600083015261115f81611123565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006111c2602583610b7e565b91506111cd82611166565b604082019050919050565b600060208201905081810360008301526111f1816111b5565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611254602383610b7e565b915061125f826111f8565b604082019050919050565b6000602082019050818103600083015261128381611247565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006112e6602683610b7e565b91506112f18261128a565b604082019050919050565b60006020820190508181036000830152611315816112d9565b905091905056fea264697066735822122043ddaf05770677d2845ce23d90c9292d672b498ab80026790f5a9ed902c9ae5964736f6c634300080b0033";

type ERC20UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC20UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Upgradeable";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }
  static readonly contractName: "ERC20Upgradeable";
  public readonly contractName: "ERC20Upgradeable";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}
