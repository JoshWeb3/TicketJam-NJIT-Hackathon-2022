import React from "react";
import carnival from "../../assets/carnival.png";

import "./tickets.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const Tickets = () => {
  return (
    <div className="toWhite">
    <img className="posterBig" src={carnival}/>
    <br/>
    <br/>
    <h3>Performer: Nicki Minaj</h3>
    <h4>Garden State  Plaza</h4>
    <h4>5:00PM</h4>
    <h5>General Admission: 20 USD</h5>
    <h5>VIP Admission: 50 USD</h5>
    <select name="cars" id="cars" form="carform">
  <option value="volvo">General</option>
  <option value="saab">VIP</option>
</select>
    Quantity<input></input>

    <br/>
    <b>Price: $20</b>
    <button>Buy now</button>
    </div>
  );
};
