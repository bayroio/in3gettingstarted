pragma solidity >=0.5.1 <0.7.0;

contract in3demo1eh {
    uint private value;
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    function sendFunds(address payable _account, uint amount) public returns (uint) {
        _account.transfer(amount);
        return 1;
    }

    function balanceOf(address _account) view public returns (uint) {
        return address(_account).balance;
    }

    function setValue(uint _value) public returns (uint) {
        value = _value;
        return 1;
    }

    function getValue(uint _value) view public returns (uint) {
        return value;
    }
}