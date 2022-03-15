import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { AllUsers } from "./components/all-users";
import * as actions from "./redux/login-logout/action-creator";

function App() {
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(actions.loginToken());
  //   }
  // });
  // const user = useSelector((state) => state.user);
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <AllUsers />
      {/* <h1> {user.isLogged && <span> de {user.userName}</span>}</h1>
        <UserButtons />
        </header> */}
    </div>
  );
}

export default App;
