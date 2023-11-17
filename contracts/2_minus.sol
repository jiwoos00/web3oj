// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IMinusCalculator {
    function minus(uint256, uint256) external pure returns (uint256);
}

contract MinusCal{
    IMinusCalculator public minusCalculator;

    function setMinusCalculator(address _minusCalculator) public {
        minusCalculator = IMinusCalculator(_minusCalculator);
    }
}


contract MyMinusCal is IMinusCalculator {
    function minus(uint256 input1, uint256 input2) override public pure returns (uint256){
        return input1 - input2;
    }
}
