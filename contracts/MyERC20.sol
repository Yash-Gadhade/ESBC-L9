// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8;

contract MyERC20{
    uint256 _totalSupply;

    function totalSupply() public view returns(uint256){
        return _totalSupply;
    }

    function balaceOf(address _owner) public view returns(uint256 balance){
        
    }
}


