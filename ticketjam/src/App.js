import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainNavigation from "./components/mainNavigation/mainNavigation";


import Footer from "../src/components/footer/footer";

import Homepage from "../src/components/homepage/homepage";
import { CreateEvent } from "./components/CreateEvent/CreateEvent";
import { ManageEvent } from "./components/ManageEvent/ManageEvent";
import { Tickets } from "./components/Tickets/Tickets";
import { CheckIn } from "./components/checkIn/checkIn"

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <br />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/manageEvent" element={<ManageEvent />} />
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/checkIn" element={<CheckIn/>}/>
        </Routes>
        <br />
      </Router>
    </div>
  );
}

export default App;
