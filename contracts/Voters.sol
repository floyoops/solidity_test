// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Voters {

    uint256 vote = 0;
    mapping(address=>bool) voters;

    function setVote() public {
        require(voters[msg.sender]!=true, 'You are already boted !');
        vote = vote + 1;
        voters[msg.sender] = true;
    }

    function getVote() public view returns (uint256) {
        return vote;
    }
}
