import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { UserButtons } from "./components/user-buttons";
import { UserList } from "./components/UserList";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h1>
            User List
            {user.isLogged && <span> {user.name}</span>}
          </h1>
          <UserButtons />
        </header>

        {user.isLogged && <UserList />}
      </header>
    </div>
  );
}

export default App;
