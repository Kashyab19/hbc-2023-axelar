import './App.css';
import { ethers, Contract, Signer } from 'ethers';
import { useState, useRef } from 'react';
// import abi from './smartContractUtils/BasicDutchAuctionParametes.json';


function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  // const contractAbi = abi.abi;
  // const contractByteCode = abi.bytecode;
  const inputRef = useRef();
  const [contractAddress, setContractAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [userBal, setUserBal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const coinDesc = [
    {"chainId":"0x5", "coinName": "ETH"},
    {"chainId":"0x13881", "coinName": "MATIC"}];

  async function connectWallet () {
    const chainId = (await window.ethereum.request({ method: "eth_chainId" }));
    if (window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        if(result.length != 0){
          setWalletAddress([result[0]]);
          getCurrentBalance(result[0]);
          setChainId([chainId]);
          console.log(chainId);
          console.log(walletAddress);
        }
        else
          console.error("No authorized account found");
      })
    } else {
      setErrorMessage('Please install MetaMask');
    }
  }

  const getCurrentBalance = (accountAddress) => {
    window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
    .then(balance => {
      setUserBalance(ethers.utils.formatEther(balance));
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <u><b>MetaMask Wallet Connection</b></u>
        </p>
        <button onClick={connectWallet}>Connect Wallet</button>
        <div style={{ display: "inline-block", textAlign: "center" }}>
          <h3>Wallet Address: </h3>{walletAddress}
          <h3>User Balance: </h3>{userBalance} ETH
        </div>
        {
          errorMessage
        }
        <p>
          <u><b>Connect your contract</b></u>
        </p>
          
      </header>
    </div>
  );
}

export default App;