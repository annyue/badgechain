/*
Generated by Mix
Wed Jul 27 18:26:25 2016 GMT-0500
*/

var assertion = {
	"abi": "[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"jsonLDContext\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"standard\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"jsonLDType\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"initialSupply\",\"type\":\"uint256\"},{\"name\":\"tokenName\",\"type\":\"string\"},{\"name\":\"decimalUnits\",\"type\":\"uint8\"},{\"name\":\"tokenSymbol\",\"type\":\"string\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052604060405190810160405280601b81526020017f4f70656e2042616467657320417373657274696f6e20546f6b656e000000000081526020015060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061008c57805160ff19168380011785556100bd565b828001600101855582156100bd579182015b828111156100bc57825182600050559160200191906001019061009e565b5b5090506100e891906100ca565b808211156100e457600081815060009055506001016100ca565b5090565b5050604060405190810160405280601e81526020017f68747470733a2f2f773369642e6f72672f6f70656e6261646765732f7631000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017257805160ff19168380011785556101a3565b828001600101855582156101a3579182015b828111156101a2578251826000505591602001919060010190610184565b5b5090506101ce91906101b0565b808211156101ca57600081815060009055506001016101b0565b5090565b5050604060405190810160405280600981526020017f417373657274696f6e000000000000000000000000000000000000000000000081526020015060026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061025857805160ff1916838001178555610289565b82800160010185558215610289579182015b8281111561028857825182600050559160200191906001019061026a565b5b5090506102b49190610296565b808211156102b05760008181506000905550600101610296565b5090565b5050604051610c5d380380610c5d833981016040528080519060200190919080518201919060200180519060200190919080518201919060200150505b83600760005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550836006600050819055508260036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061037e57805160ff19168380011785556103af565b828001600101855582156103af579182015b828111156103ae578251826000505591602001919060010190610390565b5b5090506103da91906103bc565b808211156103d657600081815060009055506001016103bc565b5090565b50508060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061042b57805160ff191683800117855561045c565b8280016001018555821561045c579182015b8281111561045b57825182600050559160200191906001019061043d565b5b5090506104879190610469565b808211156104835760008181506000905550600101610469565b5090565b505081600560006101000a81548160ff021916908302179055505b505050506107a9806104b46000396000f360606040523615610095576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100a257806318160ddd1461011d578063313ce5671461014057806346fe0631146101665780635a3b7e42146101e157806370a082311461025c57806395d89b4114610288578063a9059cbb14610303578063e028c6181461032457610095565b6100a05b610002565b565b005b6100af600480505061039f565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61012a6004805050610440565b6040518082815260200191505060405180910390f35b61014d6004805050610449565b604051808260ff16815260200191505060405180910390f35b610173600480505061045c565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ee60048050506104fd565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610272600480803590602001909190505061059e565b6040518082815260200191505060405180910390f35b61029560048050506105b9565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610322600480803590602001909190803590602001909190505061065a565b005b6103316004805050610708565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60036000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104385780601f1061040d57610100808354040283529160200191610438565b820191906000526020600020905b81548152906001019060200180831161041b57829003601f168201915b505050505081565b60066000505481565b600560009054906101000a900460ff1681565b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104f55780601f106104ca576101008083540402835291602001916104f5565b820191906000526020600020905b8154815290600101906020018083116104d857829003601f168201915b505050505081565b60006000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105965780601f1061056b57610100808354040283529160200191610596565b820191906000526020600020905b81548152906001019060200180831161057957829003601f168201915b505050505081565b60076000506020528060005260406000206000915090505481565b60046000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106525780601f1061062757610100808354040283529160200191610652565b820191906000526020600020905b81548152906001019060200180831161063557829003601f168201915b505050505081565b80600760005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101561069657610002565b600760005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505481600760005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505401101561070357610002565b5b5050565b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107a15780601f10610776576101008083540402835291602001916107a1565b820191906000526020600020905b81548152906001019060200180831161078457829003601f168201915b50505050508156",
	"name": "assertion"
}

