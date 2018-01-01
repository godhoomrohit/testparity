pragma solidity ^0.4.19;

import "./mortal.sol";
import "./creator.sol";
import "./storage.sol";

contract Hospital is Stored {
    
    function createTrailForm(uint _trialFormId) public {
        require(doctorList[msg.sender] == (true));
        ownerToTrailFormId[msg.sender][_trialFormId] = true; 
        trialFormIdToOwner[_trialFormId][msg.sender] = true;
    }
    
    function addTrialData(uint trialId, uint trialHash) public {
        trialIdToData[trialId].push(TrialData(trialHash, msg.sender));
    }
}