import React from "react";
import Nav from "../Components/Nav/Nav.js";
import Header from "../Components/Header&Footer/Header/Header.js";
import BookList from "../Components/BookList/Books/BookList.js";

import Footer from "../Components/Header&Footer/Footer/Footer.js";

function BookListPage() {
  return (
    <>
      <Nav />
      <Header />
      <BookList />
      <Footer />
    </>
  );
}

export default BookListPage;
