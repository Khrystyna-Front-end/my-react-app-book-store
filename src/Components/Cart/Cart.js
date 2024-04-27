import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";

import cart from "../../media/images/cart.svg";
import { books } from "../../books";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const cartItemsTitle = Object.keys(cartItems);
  console.log(cartItemsTitle);
  const cartItemsCount = Object.values(cartItems);
  console.log(cartItemsCount);

  const matchedBooks = books.filter((book) =>
    cartItemsTitle.some((cartItemTitle) => cartItemTitle.includes(book.title))
  );
  const totalPrice = matchedBooks
    .reduce((acc, book) => {
      const count = cartItems[book.title];
      const price = book.price * count;
      acc += price;
      return acc;
    }, 0)
    .toFixed(2);
  // const cartItem=Object(cartItems);
  // console.log(cartItem);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cart")) || [];
  //   console.log(items)
  //   setCartItems(items);
  // }, []);
  // console.log(cartItems_);
  // console.log(cartItems__);
  // console.log(cartItem);
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleBuying=()=>{
    const email = prompt('Please enter your email to connect with you');
     
    const isValidEmail = validateEmail(email);
    if (isValidEmail) {
      alert("Good");
      // Send request to the server
    } else {
      alert('Invalid email');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (cartItemsTitle.length === 0) {
    return (
      <>
        <img
          src={cart}
          alt="Empty Cart"
          className="cartEmptyLogo d-block shadow-md p-3 mb-2 bg-body rounded text-center"
        />
        <p className="textCartEmpty">Cart empty...</p>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm d-block"
          id="button-back"
        >
          <Link to="/books" className="link-back text-decoration-none">
            &larr; Back
          </Link>
        </button>
      </>
    );
  } else {
    return (
      <div className="block">
        <button
          type="submit"
          className="purchaseActive d-block btn btn-secondary shadow-sm p-3 rounded"
          onClick={clearCart}
          disabled={cartItemsTitle.length === 0}
        >
          Purchase
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm d-block "
          id="button-back"
        >
          <Link to="/books" className="link-back text-decoration-none">
            &larr; Back
          </Link>
        </button>

        <table className="w-75 mb-5">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Price ($)</th>
              <th className="border">Count</th>
              <th className="border">Total Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {matchedBooks.map((book) => {
              const count = cartItems[book.title];
              const price = (book.price * count).toFixed(2);

              // console.log(cartItemsCount)
              // const cartItem_ =

              // const [title, price] = cartItem_.split(",");

              // const count = parseInt(price);
              // const count = cartItemsCount.map();
              return (
                <>
                  <tr key={book.id}>
                    <td className="border">
                      <Link
                        to={`/books/${book.id}`}
                        className="link-book-title"
                      >
                        {book.title}
                      </Link>
                    </td>
                    <td className="border">{book.price}</td>
                    <td className="border" key={cartItemsCount.id}>
                      {count}
                    </td>

                    <td className="border">{price}</td>
                  </tr>
                </>
              );
            })}
            <tr>
              <td colSpan="3"></td>
              <td className="border fw-bold">{totalPrice}</td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-outline-dark " id="button" onClick={handleBuying}>
          {/* <Link to="/books" className="link-back text-decoration-none"> */}
           Buy
          {/* </Link> */}
        </button>
      </div>
    );
  }
};

{
  /* // {cartItems_.map((item) => ( */
}
{
  /* //               <>
              
//                 <tr>
//                   <td>{item}</td> */
}
// {/*
//         <td>{item.price}</td>
//         <td>{item.count}</td>
//         <td>{item.price * item.count}</td> */}
{
  /* //       </tr> */
}
{
  /* //     </> */
}
{
  /* //   ))} */
}
{
  /* // </tbody> */
}
{
  /* </table> */
}
{
  /* </div> */
}
{
  /* ); */
}
{
  /* } */
}

/* {cartItems.length === 0 && (
        <>
          <img
            src={cart}
            alt="Empty Cart"
            className="cartEmptyLogo d-block shadow-md p-3 mb-2 bg-body rounded text-center"
          />
          <p className="textCartEmpty">Cart empty...</p>
        </>
      )} */

export default Cart;
