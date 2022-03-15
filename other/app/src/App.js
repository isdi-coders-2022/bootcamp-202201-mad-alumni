import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Profile } from "./components/Profile";
import { UserButtons } from "./components/UserButtons.js";

function App() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="App">
      <h1 className="title">FRENEMY BOOK</h1>
      <UserButtons className="buttons" />
      <h2>{user.isLogged && <Profile />}</h2>
    </div>
  );
}

export default App;
