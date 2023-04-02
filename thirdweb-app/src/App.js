import React, { useState, useEffect } from 'react';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Marketplace from './components/marketplace';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, NavLink, Routes } from 'react-router-dom';


import Web3 from 'web3';
import MyContractABI from './utils/DistributionExecutable.json';
import Selldata from './components/selldata';

export default function Home() {

// create a new instance of web3
  const address = useAddress();
  const contractAbi = MyContractABI.abi;
  const contractByteCode = MyContractABI.bytecode;
  
  const [accepted, setAccepted] = useState(false);

  const [isCookieVisible, setIsCookieVisible] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deployerAddress, setDeployerAddres] = useState(null);

  

  useEffect(() => {
    setIsModalOpen(true);
    console.log(isModalOpen)
    setDeployerAddres(address);
  }, []);

  function acceptCookies() {
    setAccepted(true);
    setIsCookieVisible(false);
  }

  function denyCookies() {
    setIsCookieVisible(false);
  }

  const deployTheContract = () => {
    const web3 = new Web3('https://axelar-rpc.axelar.network');
    const myContract = new web3.eth.Contract(contractAbi, null, {
    from: address, // your account address
    });

    myContract.deploy({
      data: contractByteCode, // the bytecode of the contract
      arguments: []
    }).send({
      from: address // your account address
    }).then((newContractInstance) => {
      console.log(newContractInstance.options.address); // the address of the newly deployed contract
    });
  }

  return (
    <div className="container">
    
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/marketplace" className="navbar-link"> Buy Data</a>
        </li>
        <li className="navbar-item">
          <a href="/selldata" className="navbar-link"> Sell Data</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Profile</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About us</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Team</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Support</a>
        </li>
      </ul>
    </nav>

    <hr></hr>

      <main className="main">
        <h1 className="title">
          Welcome to <a target="_blank" href="https://github.com/Kashyab19/hbc-2023-axelar" >CookieMart</a>!
        </h1>
        <h3 className="title">
        Unlock the power of data with our decentralized marketplace - where your data matters.
        </h3>

        <p className="description">
          Do you want to incentivize your cookies? If yes, click on "Connect Wallet"<br/><br/>
          <ConnectWallet/>
        </p>

        
        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Cross-Chain Distribution DApp for Users &rarr;</h2>
            <p>
              DApp distributes payments and royalties to destination chain
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Native Token &rarr;</h2>
            <p>
              Creation and sale of native ERC20 token. Owning token lowers fees and subscriptions
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>User to Business Data Transfer &rarr;</h2>
            <p>
              Users can collect and list their own data to the marketplace.
            </p>
          </a>
        </div>
      </main>

      <div className={isCookieVisible ? 'cookie-template-visible' : 'cookie-template-hidden'} style={{textAlign:"center"}}>
        <p>We use cookies to enhance your experience on our website. By continuing to use our website, you consent to the use of cookies in accordance with our <a href="/cookie-policy">Cookie Policy</a>.</p>
        <div >
          <button onClick={acceptCookies} style={{marginLeft: "15px", marginRight:"20px",}}>Accept</button>
          <button onClick={denyCookies} style={{ marginLeftt:"20px"}}>Deny</button>
          <br/>
          
        </div>
      </div>

    </div>
  );
}
