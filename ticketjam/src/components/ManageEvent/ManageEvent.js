import React from "react";

import carnival from "../../assets/carnival.png";
import christmasparty from "../../assets/christmasparty.png";
import friendsgiving from "../../assets/friendsgiving.png";

import "./manageEvent.css";

import { Link } from "react-router-dom";

export const ManageEvent = () => {
  return (<>
       <br/>
     <br/>
     <br/>
  <h1 className="toWhite">Manage Events</h1>
    <div className="boxes">
     
     <br/>
     <br/>
     <br/>
     <div>
    <img className="eventPoster" src={carnival}/>
    <h3>Carnival</h3>
    Date : July 23 2023 5 pm 
Garden State Plaza
<br/>
Price: 0.01 ETH or 20 USDC
<br/>
Performer: nickiminaj.eth
<br/>
<br/>
<b>EDIT</b> 
    </div>
    <div>
    <img className="eventPoster" src={christmasparty}/>
    <h3>Christmas Party</h3>
    July 23 2023 5 pm 
North Pole
<br/>
Price: 0.02 ETH or 40 USDC
<br/>

Performer: miriahcarey.eth
<br/>
<br/>
<b>EDIT</b> 
    </div>
    <div>
      <img className="eventPoster" src={friendsgiving}/>
      <h3>Friendsgiving</h3>
      Friendsgiving 
November 24 2022 7 pm 
Montclair state university
<br/>
Price: 1 ETH or 2000 USDC
<br/>
gordonramsay.eth 
<br/>
<br/>
<b>EDIT</b>  </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Link to="/createEvent" className="navlink">    <div className="joinUs">
      
      Create an Event
    </div></Link>


    </>
  );
};
