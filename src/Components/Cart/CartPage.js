import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart.js";
import Nav from "../Nav/Nav.js";

import Header from "../Header&Footer/Header.js";
import Footer from "../Header&Footer/Footer.js";

function CartPage() {
  
    const navigate = useNavigate();

    useEffect(() => {
      const username = localStorage.getItem("Username");

      if (!username) {
        navigate("/");
      }
    }, [navigate]);
  return (
    <div>
      <Nav />
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;
