import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";

import Profile from "./components/candidates_comps/Profile";
import IdentityProofs from "./components/candidates_comps/IdentityProofs";
import Addresses from "./components/candidates_comps/Addresses";
import Education from "./components/candidates_comps/Education";
import Workhistory from "./components/candidates_comps/Workhistory";
import Reviews from "./components/candidates_comps/Reviews";
import BankDetails from "./components/candidates_comps/BankDetails";
import Navbarnew from "./components/Navbarnew";
import CandidateDetailsHome from "./components/candidates_comps/CandidateDetailsHome";
import LoginMobileResSignup from "./components/LoginMobileResSignup";
import LoginMobileResDirect from "./components/LoginMobileResDirect";
import LoginMobileResDirectSecond from "./components/LoginMobileResDirectSecond";
import Signup from "./components/Signup";
import AddressMobileRes from "./components/AddressMobileRes";
import UserverificationList from "./components/UserverificationList";
import RequestNewVerification from "./components/RequestNewVerification";
import { AuthProvider } from "./components/utils/AuthContext";
import axios from "axios";
import PrivateRoutes from "./components/utils/PrivateRoutes";

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   let token = localStorage.getItem('accessToken');
//   console.log("check this", config, token)

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Access-Control-Allow-Origin'] = '*';
//   }
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let token = localStorage.getItem("accessToken");
    console.log("check this", config, token);

    // Check if the request URL is one of the excluded URLs
    const excludedUrls = [
      "https://dev.gotroo.in/utils/populate_states",
      "https://dev.gotroo.in/utils/populate_countries",
    ];

    if (token && !excludedUrls.includes(config.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const App = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("accessToken");
  useEffect(() => {
    token = localStorage.getItem("accessToken");
    if (token === null) {
      navigate("/");
      localStorage.clear();
    }
    // else {
    //   navigate('/dashboard');
    // }
  }, [token]);

  return (
    <>
      <AuthProvider>
        <Navbarnew />

        <Routes>
          <Route path="/" element={<LoginMobileResDirect />} />
          <Route
            path="/LoginMobileResFromSignup"
            element={<LoginMobileResSignup />}
          />
          <Route
            path="/LoginMobileResDirectSecond"
            element={<LoginMobileResDirectSecond />}
          />
          <Route path="/signup" element={<Signup />} />

          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/addressNew" element={<AddressMobileRes />} />
          <Route path="/verificationLists" element={<UserverificationList />} />
          <Route
            path="/requestNewVerification"
            element={<RequestNewVerification />}
          />

          <Route path="/candidates" element={<CandidateDetailsHome />}>
            <Route path="profile" element={<Profile />} />
            <Route path="identityproofs" element={<IdentityProofs />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="education" element={<Education />} />
            <Route path="workhistory" element={<Workhistory />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="bankdetails" element={<BankDetails />} />
          </Route>
          {/* <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} /> */}
          {/* </Route> */}

          {/* Handle unknown routes
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
