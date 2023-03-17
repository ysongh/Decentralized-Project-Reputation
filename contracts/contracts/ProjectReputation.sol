// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract ProjectReputation {
    mapping(address => uint[]) public ratings;

    event rated(address to, uint num, address from);

    constructor() {}

    function rateAProject(address to, uint num) external {
        ratings[to].push(num);
        emit rated(to, num, msg.sender);
    }

    function getProjectRating(address to) external view returns (uint[] memory) {
        return ratings[to];
    }
}