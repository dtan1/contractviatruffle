// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleBank {
   mapping (address => uint) balances;

  constructor() public {
  }
 
  // client can request the balance deposited.
  function getBalance() public view returns (uint) {
    return balances[msg.sender];
  }

  // accept deposit by client
  function deposit() public payable {
      balances[msg.sender] += msg.value;
  }

  //checks-Effects-Interaction Pattern
  function withdraw(uint amount) public {
      //checks
      require( balances[msg.sender] >= amount);

      //update effects
      balances[msg.sender] -= amount;

      //interaction - transfer call is used to further guard against re-entrancy
      msg.sender.transfer(amount);

  }

    // withdraw all
    function withdrawAll() public {
      //checks
      require( balances[msg.sender] >= 0);

      //update effects
      uint amount = balances[msg.sender];
      balances[msg.sender] = 0;

      //interaction - transfer call is used to further guard against re-entrancy
      msg.sender.transfer(amount);

  }


}
