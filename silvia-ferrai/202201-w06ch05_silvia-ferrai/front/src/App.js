import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { Robots } from "./components/Robots";
import { AddRobot } from "./components/AddRobot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Robots />
      </header>
    </div>
  );
}

export default App;
