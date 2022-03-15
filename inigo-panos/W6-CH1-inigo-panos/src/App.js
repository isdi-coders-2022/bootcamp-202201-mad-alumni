import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/counter/counter";
import { ToDo } from "./components/todo/todo";
import "./App.css";
import { AddTask } from "./components/todo/addTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDo />
        <AddTask />
      </header>
    </div>
  );
}

export default App;
