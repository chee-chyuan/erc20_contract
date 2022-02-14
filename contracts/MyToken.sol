// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 _totalSupply) ERC20("MyToken", "Symbol") {
        _mint(msg.sender, _totalSupply * 10 ** decimals());
    }
}
