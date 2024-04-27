import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../Components/Page404/Page404Page.css";
// import { FaBan } from "react-icons/fa";
import SignInNav from "../Components/SignIn/SignInNav/SignInNav.js";
import Header from "../Components/Header&Footer/Header/Header.js";
import Footer from "../Components/Header&Footer/Footer/Footer.js";

function Page404Page() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <>
      <SignInNav />
      <Header />
      <div className="error-block">
        <p className="msgError">Oops, something went wrong. </p>
        <br />
        {/* <FaBan style={{ color: "rgb(117, 116, 116)", fontSize: "300%" }} /> */}
        <br />
        <span className="errorMsg">404 error</span>
      </div>
      <Footer />
    </>
  );
}

export default Page404Page;
