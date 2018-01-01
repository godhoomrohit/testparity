pragma solidity ^0.4.19;

import "./mortal.sol";

contract Stored {
    struct Hospital {
        string hospitalName;
        address[] doctors;
        bool initialized;
    }
    mapping (address => Hospital) HospitaltoOwner;
	mapping (address => bool) doctorList;

    struct TrialData {
        uint trialHash;
        address writer;
    }
    
    mapping(uint => mapping(address => bool)) trialFormIdToOwner;
    mapping(address => mapping(uint => bool)) ownerToTrailFormId;
    mapping(uint => TrialData[]) trialIdToData;
}