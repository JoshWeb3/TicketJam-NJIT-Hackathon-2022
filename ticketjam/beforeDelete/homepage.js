import React from "react";
import kahoot from "../../assets/kahoot.png";
import "./homepage.css";
import redhawkInfo from "../tokenDescription/tokenDescription";
import redhawk from "../../assets/redhawktokennew.png";
import bitcoin from "../../assets/bitcoin.gif";
import metamask from "../../assets/metamasklogo.webp";
import ethspin from "../../assets/ethspin.gif";
import blockchain from "../../assets/blockchain.png";
import logo from "../../assets/logo.png";
import brain from "../../assets/901002.png";
import comp from "../../assets/computer.png";
import healthcare from "../../assets/healthcare.png";
import coding from "../../assets/coding.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import discord from "../../assets/disc.png";
import TokenDescription from "../tokenDescription/tokenDescription";
import Meeting1 from "../../assets/meeting1.jpg";

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
        <div className="title">Web3 Association</div>
        <br />
        <img class="iconSmall" src={logo} />
        <br />
        <br />
        The Web3 Association is a club based in Montclair State University
        dedicated to preparing its members for a new exciting & rapidly evolving
        industry.
        <br />
        <br />
        <div className="intro">
          <div className="howTo">
            <div id="scroll-container">
              <div id="scroll-text">Have a great summer!</div>
            </div>
            ☀️🌴⛵🍍🦀🌊🏄🥥🏖🤿
            <br />
            <br />
            {n}
            <br />
            {time}
          </div>
        </div>
        <br />
      </div>
      <br />

      <div className="donate">
        <h1>What we study</h1>
        <h2>Web3</h2>
        <img className="iconTiny" src={brain}></img>
        <br />
        <br />
        Learn about concepts like Decentralized Finance (DeFi), Decentralized
        Autonomous Organizations (DAO's), Non-Fungible Tokens (NFT's)
        Cryptocurrency & more!
        <br />
        <br />
        <h2>Blockchain</h2>
        <img className="iconTiny" src={blockchain}></img>
        <br />
        <br />
        Use technologies like smart contracts, cryptography, Inter-Planetary
        File Sharing (IPFS), & API's.
        <h2>Programming Languages</h2>
        <img src={coding} className="iconTiny"></img>
        <br />
        <br />
        <b>Web Development</b>
        <br />
        HTML, CSS, JavaScript.
        <br />
        <br />
        <b>Mobile App Development</b>
        <br />
        Swift & Java.
        <br />
        <br />
        <b>Web3 Development</b>
        <br />
        Solidity, Vyper, Rust, & Yul.
        <br />
        <br />
        <h2>Non-Tech Side</h2>
        <img src={healthcare} className="iconTiny"></img>
        <br />
        <br />
        Blockchain technology has the potential to infiltrate many different
        industries so we need input from all walks of life to give us new
        insights and collaborations for our projects.
        <br />
      </div>

      <br />
      <div className="donate">
        <img src={Meeting1} className="kahoot"></img>
        <br />
        <h1>Our Goals</h1>
        <div>Group body meetings weekly on campus and virtually</div>
        <h1>🧑‍🤝‍🧑</h1>

        <div class="vl"></div>
        <br />
        <div>
          {" "}
          Provide an environment where students can learn from professionals in
          the industry
        </div>
        <h1>💼</h1>

        <div class="vl"></div>
        <br />
        <div>
          {" "}
          Build projects that students can put on their portolio to jumpstart
          their career
        </div>
        <h1>🛠️</h1>

        <div class="vl"></div>
        <br />
        <div>Host fun hackathons centered around coders of all levels</div>
        <h1>🏆</h1>

        <div class="vl"></div>
        <br />
        <div> Have field trips to Web3 Events</div>
        <h1>✈️</h1>
      </div>
      <br />

      <br />
    </div>
  );
};

export default Homepage;
