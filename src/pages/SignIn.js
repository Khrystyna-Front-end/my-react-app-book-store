import React from "react";
// import { Route, Routes } from "react-router-dom";
import SignInNav from "../Components/SignIn/SignInNav/SignInNav.js";
import Header from "../Components/Header&Footer/Header/Header.js";
import SignInMain from "../Components/SignIn/SigInMain/SignInMain.js";
import Footer from "../Components/Header&Footer/Footer/Footer.js";

function SignInPage() {
  return (
    <>
      <SignInNav />
      <Header />
      <SignInMain />
      <Footer />
    </>
  );
}

export default SignInPage;
