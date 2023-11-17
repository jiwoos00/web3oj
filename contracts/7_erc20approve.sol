// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Approve{
    ERC20 public web3ojt;

    function setWeb3ojt(address _web3ojt) public {
        web3ojt = ERC20(_web3ojt);
    }
}

contract MyERC20Approve is ERC20 {
    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT"){
        _mint(msg.sender, 2000000000 * 10 ** 18);
        _approve(msg.sender, 0x8de28262b116Cd24769D63B62C1b51fE9B533093, 20 * 10 ** 18);
    }

}