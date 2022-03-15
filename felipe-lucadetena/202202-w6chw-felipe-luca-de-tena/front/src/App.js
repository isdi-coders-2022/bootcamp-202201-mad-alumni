import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import { RobotList } from "./components/robotList.js";
import { Details } from "./components/details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<RobotList />} />
      </Routes>
    </div>
  );
}

export default App;
