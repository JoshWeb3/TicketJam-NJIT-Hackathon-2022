import React from "react";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
import ticketJamLogo from "../../assets/ticketjamlogo.png";

import "../CreateEvent/CreateEvent";

const MainNavigation = () => {
  return (
    <div>
      <img src={ticketJamLogo} />
      <div className="mainNavigation">
        {" "}
        <br />
        <Link to="/manageEvent" className="navlink">
          Manage Events
        </Link>
        <Link to="/tickets" className="navlink">
          Tickets
        </Link>
        <Link to="/CheckIn" className="navlink">
          Check In
        </Link>
        <br />
      </div>
    </div>
  );
};

export default MainNavigation;
