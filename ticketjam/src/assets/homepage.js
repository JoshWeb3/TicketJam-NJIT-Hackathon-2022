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
        <div className="joinUs">Connect Wallet</div>
        <br />
        <br />
        
      </div>
    </div>
  );
};

export default Homepage;
