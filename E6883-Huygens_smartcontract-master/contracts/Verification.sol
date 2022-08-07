// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Verification {
    struct CandidateRequest{
        string ssn;
        string firstName;
        string lastName;
        string homeAddress;
        string uni;
    }

    struct DegreeInfo {
        string university;
        string degreeName;
        string major;
        string year;
        string gpa;
    }


    struct EmployerRequest{
        string firstName;
        string lastName;
        string ssn;
    }

    // response that will be sent to employer
    struct EmployerReponse {
        CandidateRequest candidateInfo;
        DegreeInfo degreeInfo;
    }

    // mapping when candidate joins the contract
    mapping(string => DegreeInfo) public storeCandidateDegreeInfo;
    mapping(string => CandidateRequest) public storeCandidateInfo;
     
    address public manager;
    constructor() {
        manager = msg.sender;
    }

    function candidateHandler(string memory ssn,  string memory firstName,  string memory lastName, string memory homeAddress, string memory uni) public {
        storeCandidateInfo[ssn] = CandidateRequest(ssn, firstName, lastName, homeAddress, uni);
    }

    function institutionHandler(string memory university, string memory ssn, string memory degreeName, string memory major, string memory year, string memory gpa) public {
        storeCandidateDegreeInfo[ssn] = DegreeInfo(university, degreeName, major, year, gpa);
    }

    function employerHandler(string memory ssn) public view returns(string memory, string memory, string memory, string memory, string memory, string memory, string memory) {
        string memory firstName = storeCandidateInfo[ssn].firstName;
        string memory lastName = storeCandidateInfo[ssn].lastName;
        string memory university = storeCandidateDegreeInfo[ssn].university;
        string memory major = storeCandidateDegreeInfo[ssn].major;
        string memory degreeName = storeCandidateDegreeInfo[ssn].degreeName;
        string memory year = storeCandidateDegreeInfo[ssn].year;
        string memory gpa = storeCandidateDegreeInfo[ssn].gpa;
        return (firstName,lastName,university,major,degreeName,year, gpa);
    }
}