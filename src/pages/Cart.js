import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Components/Cart/Cart.js";
import Nav from "../Components/Nav/Nav.js";
import { books } from "../books.js";
import Header from "../Components/Header&Footer/Header/Header.js";
import Footer from "../Components/Header&Footer/Footer/Footer.js";

function CartPage() {
  console.log(books);
  books.map((book, index) => {
    console.log([index], book.author);
  });
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
