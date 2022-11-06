import React from "react";
import "./homepage.css";
import { ethers } from "ethers";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


const Homepage = () => {
  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();

  async function connectWallet() {
    // A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()
  }

  return (
    <div>
      <div className="donate">
      <br />
      <br />
      <br />
      <br />
        <div className="title">We handle the finances in event hosting</div>
        <br />
        
        <div className="title">Everything from ticket sales, to customer check in and performer payments</div>
        <br />
        <br />
        <br />
        <div className="title">Eliminate fraudulent tickets</div>
        <br />
    
        <div className="title">Easily transferrable</div>
        <br />
        <div className="title">Guarantee all parties get paid</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className="toWhite">Connect your Web3 Wallet to give us a try for free 🎤</h3>
        <Link to="/manageEvent" className="navlink"><div className="joinUs" onClick={connectWallet()}>Connect Wallet</div></Link>
        
        <br />
        <br />
        
      </div>
    </div>
  );
};

export default Homepage;
