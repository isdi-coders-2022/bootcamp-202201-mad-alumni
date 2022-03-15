import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { UserButtons } from "./components/UserButtons.js";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <h1>FRENEMY BOOK</h1>
      <h2>{user.isLogged && <span>{user.userName}</span>}</h2>
      <UserButtons />
    </div>
  );
}

export default App;
