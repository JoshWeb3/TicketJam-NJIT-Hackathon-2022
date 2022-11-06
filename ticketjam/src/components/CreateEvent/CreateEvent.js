import React from "react";

import "./createEvent.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const CreateEvent = () => {
  return (
    <div className="toWhite">
     <h1>Create an Event</h1>
     <br/>
     <br/>
     <br/>
     <br/>
     <form>
     Title <input className="inputs" value="Great Show"></input>
     <br/>
     Event Date and Time <input className="inputs" value="1 January 1111 @ 13PM"></input>
     <br/>
     Price of General Admission $<input className="inputs" value="20"></input>
     <br/>
     Price of VIP Admission $<input className="inputs" value="30"></input>
     <br/>
     Max amount of General Admission <input className="inputs" value="100"></input>
     <br/>
     Max amount of VIP Admission <input className="inputs" value="50"></input>
     <br/>
     Performer Payment $<input className="inputs" value="1000"></input>
     <br/>
     Performer Wallet Address <input className="inputs" value="johnstamos.eth"></input>
     <br/>
     Performer Royalties %<input className="inputs" value="1"></input>
     <br/>
     Metadata URL<input className="inputs" value="https://...."></input>
     </form>
     <br/>
     <br/>
     <div className="joinUs">
      Create Contract
     </div>
    </div>
  );
};
