import React from "react";

import "./footer.css";
import discord from "../../assets/disc.png";
import twitter from "../../assets/twit.png";
import instagram from "../../assets/instagram.png";
import opensea from "../../assets/opensea.png";
import linkedin from "../../assets/linkedinlogo.png";
import github from "../../assets/githublogo.png";
import email from "../../assets/email.png";

const footer = () => {
  return (
    <div class="links">
      <div className="socialMedia">
        <a href="https://discord.com/invite/web3msu">
          <img className="linkButton" src={discord}></img>
        </a>
        <br />

        <br />
        <a className="link" href="https://twitter.com/web3msu">
          <img className="linkButton" src={twitter}></img>
        </a>
        <br />
        <a className="link" href="https://www.instagram.com/web3msu/">
          <img className="linkButton" src={instagram}></img>
        </a>
        <a className="link" href="https://opensea.io/web3msu">
          <img className="linkButton" src={opensea}></img>
        </a>
        <a className="link" href="https://www.linkedin.com/company/web3msu/">
          <img className="linkButton" src={linkedin}></img>
        </a>
        <a className="link" href="https://github.com/Web3-Association-MSU">
          <img className="linkButton" src={github}></img>
        </a>
        <a href="mailto:web3msu@gmail.com">
          <img
            className="link
      "
            src={email}
          ></img>
        </a>
      </div>

      <a
        className="noDeco"
        href="https://montclair.campuslabs.com/engage/organization/web3"
      >
        <div className="engageButton">Need Help</div>
      </a>

      <br />
    </div>
  );
};

export default footer;
