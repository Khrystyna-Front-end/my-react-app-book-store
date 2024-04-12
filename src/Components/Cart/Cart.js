import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import "./CartEmpty.css";
import cart from "../images/cart.svg";
import { books } from "../../books";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const cartItemsTitle = Object.keys(cartItems);
  const cartItemsCount = Object.values(cartItems);

  const matchedBooks = books.filter((book) =>
    cartItemsTitle.some((cartItemTitle) => cartItemTitle.includes(book.title))
  );

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
          className="btn btn-outline-dark btn-sm d-block "
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
              // const cartItem_ = 
              cartItemsTitle.find((item) =>
                item.includes(book.title)
              );
{cartItemsCount.map((count)=>{
              // const [title, price] = cartItem_.split(",");

              // const count = parseInt(price);
// const count = cartItemsCount.map();
              return (
                <>
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.price}</td>
                    <td >{count}</td>
                    <td>{book.price * count}</td>
                  </tr>
                </>
              );
              })}})}
          </tbody>
        </table>
      </div>
    );
  }
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

  {
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
  }
};

export default Cart;
