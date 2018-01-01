import React from 'react';
import {Bond} from 'oo7';
import {Rspan} from 'oo7-react';
import {bonds} from 'oo7-parity';
import {InputBond} from 'parity-reactive-ui';
const createKeccakHash = require('keccak');

const abi = [
	{
	  "constant": false,
	  "inputs": [
		{
		  "name": "_name",
		  "type": "string"
		}
	  ],
	  "name": "checkpoda",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "getVal",
	  "outputs": [
		{
		  "name": "",
		  "type": "string"
		},
		{
		  "name": "",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	}
];

export class App extends React.Component {

	constructor() {
		super();
		this.ROHITVALIDITY = bonds.makeContract('0x99d06864C2a987DE97ab55C814e5EeD76760F5cB', abi);		

		window.toChecksumAddress = function toChecksumAddress (address) {
			address = address.toLowerCase().replace('0x', '')
			var hash = createKeccakHash('keccak256').update(address).digest('hex')
			var ret = '0x'
		  
			for (var i = 0; i < address.length; i++) {
			  if (parseInt(hash[i], 16) >= 8) {
				ret += address[i].toUpperCase()
			  } else {
				ret += address[i]
			  }
			}
		  
			return ret
		  }
	}

	handleClick() {
		const self = this;
		self.ROHITVALIDITY.checkpoda("anand")
		.then(function(xx) {
			console.log(xx);
		})
	}

	render() {
		const self = this;
		return (
			<div>
				<Rspan>{bonds.me}</Rspan>
				<br/>
				<Rspan>
					{bonds.accountsInfo[bonds.me].name}
				</Rspan>
				<div onClick={self.handleClick.bind(self)}>
					click me
				</div>
			</div>
		);
	}
}
