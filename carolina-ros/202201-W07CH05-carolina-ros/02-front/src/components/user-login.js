// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import * as actions from "../redux/login-logout/action-creator";
// import { UserButtons } from "./user-buttons";

// export function Login() {
//   const [userState, setUserState] = useState({
//     username: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     setUserState({ ...userState, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(actions.login(userState));
//   };

//   useEffect(() => {
//     if (auth.token) {
//       navigate("/users/");
//     }
//   }, [auth, navigate]);

//   return (
//     <main className="main">
//       <form onSubmit={handleSubmit} className="login">
//         <h2 className="login">Login</h2>
//         <div className="login-container">
//           <label htmlFor="username" className="login-label">
//             Username:
//           </label>
//           <input
//             value={userState.username}
//             onChange={handleChange}
//             id="username"
//             type="text"
//             className="login-input"
//           />
//         </div>
//         <div className="login-container">
//           <label htmlFor="password" className="login-label">
//             Password:
//           </label>
//           <input
//             value={userState.password}
//             onChange={handleChange}
//             id="password"
//             type="password"
//             className="login-input"
//           />
//         </div>
//         <UserButtons submit>Login</UserButtons>
//       </form>
//     </main>
//   );
// }
