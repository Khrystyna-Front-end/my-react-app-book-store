import React, {  useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../../books.js";
import Nav from "../Nav/Nav.js";
import Header from "../Header&Footer/Header.js";
import SpecificBook from "./SpecificBook.js";
import Footer from "../Header&Footer/Footer.js";

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
