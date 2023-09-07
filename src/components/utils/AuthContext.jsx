// AuthContext.js

import { createContext, useContext, useState } from "react";

// Create a new context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create an AuthProvider component to wrap your entire application
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: null,
    user_id: null,
  });

  const setAuth = (token, user_id) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userid", user_id);
    setAuthData({ token, user_id });
  };

  console.log("from the context", authData);
  const logout = () => {
    setAuthData({
      token: null,
      user_id: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authData, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useContext, useState } from "react";

// // Create a context for authentication
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authData, setAuthData] = useState({
//     token: localStorage.getItem("token") || null,
//     user_id: localStorage.getItem("user_id") || null,
//   });

//   // Function to set the token and user ID and also save them in local storage
//   const login = (token, user_id) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user_id", user_id);
//     setAuthData({ token, user_id });
//   };

//   // Function to remove the token and user ID from local storage
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user_id");
//     setAuthData({ token: null, user_id: null });
//   };

//   return (
//     <AuthContext.Provider value={{ authData, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
