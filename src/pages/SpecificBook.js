import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../books.js";
import Nav from "../Components/Nav/Nav.js";
import Header from "../Components/Header&Footer/Header/Header.js";
import SpecificBook from "../Components/SpecificBook/SpecificBookPage/SpecificBook.js";
import Footer from "../Components/Header&Footer/Footer/Footer.js";

function SpecificBookPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("Username");

    if (!username) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <Nav />
      <Header />
      <SpecificBook data={books} />
      <Footer />
    </>
  );
}

export default SpecificBookPage;
