import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Detail } from "./components/todo/detail.js";
import { ToDo } from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`http://image.noelshack.com/fichiers/2015/18/1430670805-mechanicus.png`}
          className="App-logo"
          alt="logo"
        />
        <Routes>
          <Route path="/robot/:id" element={<Detail />} />
          <Route path="/" element={<ToDo />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
