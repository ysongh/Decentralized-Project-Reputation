// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract ProjectReputation {
    uint public projectCount = 0;

    Project[] public projects;

    struct Project{
        uint id;
        address contractAddress;
        string projectURL;
        uint[] ratings;
        address[] voters;
        address owner;
    }

    event rated(uint id, uint num, address from);

    constructor() {}

    modifier isVoted(uint id) {
        for(uint i = 0; i < projects[id].voters.length; i++) {
            require(projects[id].voters[i] != msg.sender, "Already voted");
        }
        _;
    } 

    function addProject(address contractAddress, string memory url) external {
        projects.push(Project(projectCount, contractAddress, url, new uint[](0), new address[](0), msg.sender));
        projectCount++;
    }

    function rateAProject(uint id, uint num) external isVoted(id) {
        require(num < 6, "Rate must be less than 5");
        
        projects[id].ratings.push(num);
        projects[id].voters.push(msg.sender);
        emit rated(id, num, msg.sender);
    }

    function getProjects() external view returns (Project[] memory) {
        return projects;
    }

    function getRatingsByProject(uint id) external view returns (uint[] memory) {
        return projects[id].ratings;
    }

    function getVotersByProject(uint id) external view returns (address[] memory) {
        return projects[id].voters;
    }
}