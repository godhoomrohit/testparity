pragma solidity ^0.4.19;

import "./mortal.sol";
import "./storage.sol";

contract Creator is Owned, Mortal, Stored {
    address[] private doctors;
    
    function createHospital(address _hospitalAddress, string _hospitalName) public onlyOwner {
        HospitaltoOwner[_hospitalAddress] = Hospital(_hospitalName, doctors, true);
    }
    
    function getHospital(address _addr) public onlyOwner view returns (string, address[], address) {
        Hospital memory h = HospitaltoOwner[_addr];
        return (h.hospitalName, h.doctors, msg.sender);
    }

    function addDoctor(address _doctorAddress) public {
        require(HospitaltoOwner[msg.sender].initialized);
        HospitaltoOwner[msg.sender].doctors.push(_doctorAddress);
		doctorList[_doctorAddress] = true;
    }
}