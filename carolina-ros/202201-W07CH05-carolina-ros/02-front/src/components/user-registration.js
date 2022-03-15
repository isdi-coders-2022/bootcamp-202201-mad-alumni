// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
// import { app } from "../firebase/fb-connect";
// import * as register from "../services/user";
// import { UserButtons } from "./user-buttons";

// /* eslint-disable jsx-a11y/label-has-associated-control */
// export function Register() {
//   const storage = getStorage(app);
//   const [userState, setUserState] = useState({
//     name: "",
//     password: "",
//     age: "",
//   });
//   const [profileImage, setProfileImage] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     setUserState({ ...userState, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let url = "";
//     if (profileImage !== null) {
//       const imageRef = ref(storage, profileImage.name);
//       await uploadBytes(imageRef, profileImage);
//       url = await getDownloadURL(imageRef);
//     }

//     const response = await register.registerUser({
//       ...userState,
//       profilePicUrl: url,
//     });
//     if (response.data) {
//       setSuccess(true);

//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     }
//   };

//   useEffect(() => {
//     if (auth.token) {
//       navigate("/");
//     }
//   }, [auth, navigate]);

//   return (
//     <main className="main">
//       <form onSubmit={handleSubmit} className="register">
//         <h2 className="register">Register</h2>
//         {success && <p>Register successful, redirecting to login</p>}
//         <div className="register-container">
//           <label htmlFor="username" className="register-label">
//             Username:
//           </label>
//           <input
//             value={userState.username}
//             onChange={handleChange}
//             id="username"
//             type="text"
//             className="register-input"
//           />
//         </div>
//         <div className="register--container">
//           <label htmlFor="password" className="register-label">
//             Password:
//           </label>
//           <input
//             value={userState.password}
//             onChange={handleChange}
//             id="password"
//             type="password"
//             className="register-input"
//           />
//         </div>
//         <div className="register--container">
//           <label htmlFor="name" className="register-label">
//             Name:
//           </label>
//           <input
//             value={userState.name}
//             onChange={handleChange}
//             id="name"
//             type="text"
//             className="register-input"
//           />
//         </div>
//         <div className="register--container">
//           <label htmlFor="age" className="register-label">
//             Age:
//           </label>
//           <input
//             value={userState.age}
//             onChange={handleChange}
//             id="lastName"
//             type="text"
//             className="register-input"
//           />
//         </div>
//         <div className="register--container">
//           <label htmlFor="profilePicUrl" className="register-label">
//             Profile Picture:
//           </label>
//           <input
//             value={userState.profilePicUrl}
//             onChange={(e) => setProfileImage(e.target.files[0])}
//             id="profilePicUrl"
//             type="file"
//             className="register-input"
//           />
//         </div>
//         <UserButtons submit>Register</UserButtons>
//       </form>
//     </main>
//   );
// }
