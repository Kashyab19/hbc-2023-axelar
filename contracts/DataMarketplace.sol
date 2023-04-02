//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol';

contract DistributionExecutable is AxelarExecutable {
    IAxelarGasService public immutable gasService;

    string public value;
    string public sourceChain;
    string public sourceAddress;

    address public owner;
    mapping(address => string) public userData;
    address[] public shareHolders;
    address[] public receipients;
    uint256 public totalRecipients = 0;
    address[] private arr;

    constructor(address gateway_, address gasReceiver_) AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasReceiver_);
        owner = msg.sender;
        //receipients[0] = owner;
        totalRecipients+=1;
    }

    function newUserData(address user, string calldata uri) public {
        userData[user] = uri;
        receipients[totalRecipients++] = user;
    }

    function buyRoyalty(string calldata destChain, string calldata destAddy, string calldata symbol) public payable{
        shareHolders.push(msg.sender);
        receipients[totalRecipients++] = msg.sender;
        setRemoteValue(destChain, destAddy, "Ethereum", address(this) ,msg.sender, "aUSDC",msg.value );
        address[] memory receipientsList = receipients;
        //distributeTokens(destChain, destAddy, receipientsList, symbol, msg.value );
        sendToMany(destChain, destAddy, receipientsList, symbol, msg.value );
    }

    //Call this function to update the value of this contract along with all its siblings'.
    function setRemoteValue(
        string calldata destinationChain,
        string calldata destinationAddress,

        string memory srcChain,
        address srcAddress,
        address srcAddy,
        string memory symbol,
        uint256 amount

    ) public payable {
        bytes memory payload = encode(srcChain, srcAddress, srcAddy, symbol, amount);
        if (msg.value > 0) {
            gasService.payNativeGasForContractCall{ value: msg.value }(
                address(this),
                destinationChain,
                destinationAddress,
                payload,
                msg.sender
            );
        }
        gateway.callContract(destinationChain, destinationAddress, payload);

    }

    function encode(string memory chainSrc, address addressSrc, address userSrc, string memory symb, uint256 cost) public pure returns (bytes memory) {
        return (abi.encode(chainSrc, addressSrc, userSrc, symb, cost));
    }

    function decode(bytes memory data) public pure returns (string memory chainSrc, address addressSrc, address userSrc, string memory symb, uint256 cost) {
        (chainSrc, addressSrc, userSrc, symb, cost) = abi.decode(data, (string, address, address, string, uint256));
    }

    function sendToMany(
        string memory destinationChain,
        string memory destinationAddress,
        address[] memory destinationAddresses,
        string memory symbol,
        uint256 amount
    ) public payable {
        address tokenAddress = gateway.tokenAddresses(symbol);
        IERC20(tokenAddress).approve(address(gateway), amount);
        bytes memory payload = abi.encode(destinationAddresses);
        if (msg.value > 0) {
            gasService.payNativeGasForContractCallWithToken{ value: msg.value }(
                address(this),
                destinationChain,
                destinationAddress,
                payload,
                symbol,
                amount,
                msg.sender
            );
        }
        gateway.callContractWithToken(destinationChain, destinationAddress, payload, symbol, amount);
    }

    function _execute(
        string calldata sourceChain_,
        string calldata sourceAddress_,
        bytes calldata payload_
    ) internal override {
        (string memory chainSrc, address addressSrc, address userSrc, string memory symb, uint cost) = decode(payload_);
        sourceChain = sourceChain_;
        sourceAddress = sourceAddress_;

        arr.push(userSrc);
        sendToMany(chainSrc, Strings.toHexString(uint256(uint160(addressSrc)), 20), arr, symb, cost);
    }

    function _executeWithToken(
        string calldata,
        string calldata,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal override {
        address[] memory recipients = abi.decode(payload, (address[]));
        address tokenAddress = gateway.tokenAddresses(tokenSymbol);

        uint256 sentAmount = amount / recipients.length;
        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(tokenAddress).transfer(recipients[i], sentAmount);
        }
    }
}