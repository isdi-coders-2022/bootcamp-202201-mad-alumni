import React from "react";
import logo from "./logo.svg";
//import { Counter } from "./components/counter";
import "./App.css";
import { ToDo } from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ToDo />
      </header>
    </div>
  );
}

export default App;
