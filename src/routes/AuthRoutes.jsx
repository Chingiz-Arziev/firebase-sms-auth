import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import VerificationPage from "../pages/VerificationPage";
import HomePage from "../pages/HomePage"

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="verification" element={<VerificationPage />}/>
        <Route path="home" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;