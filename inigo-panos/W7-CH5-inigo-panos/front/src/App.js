import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/mainPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
