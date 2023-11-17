// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Transfer{
    ERC20 public web3ojt;

    function setWeb3ojt(address _web3ojt) public {
        web3ojt = ERC20(_web3ojt);
    }
}

contract MyERC20Transfer is ERC20, ERC20Burnable {
    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT"){
        _mint(msg.sender, 2000000000 * 10 ** 18);
        _transfer(msg.sender, 0xcf1fbA755e6eb48a8A22ecC7dE8E3f57deD0886A, 20 * 10 ** 18);
    }

}