// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract ProjectReputation {
    uint public projectCount = 0;

    uint numberOfChallenges;
    Project[] public projects;

    struct Project{
        uint id;
        string name;
        uint[] ratings;
        address[] voters;
        address owner;
    }

    event rated(uint id, uint num, address from);

    constructor() {}

    function addProject(string memory name) external {
        projects.push(Project(projectCount, name, new uint[](0), new address[](0), msg.sender));
        projectCount++;
    }

    function rateAProject(uint id, uint num) external {
        require(num < 6, "Rate must be less than 5");
        
        projects[id].ratings.push(num);
        projects[id].voters.push(msg.sender);
        emit rated(id, num, msg.sender);
    }

    function getProjects() external view returns (Project[] memory) {
        return projects;
    }
}