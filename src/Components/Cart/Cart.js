import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import "./CartEmpty.css"
import cart from "../images/cart.svg";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );
  console.log(typeof cartItems);
  console.log(cartItems);

  const cartItems_ = Object.keys(cartItems);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cart")) || [];
  //   console.log(items)
  //   setCartItems(items);
  // }, []);
  console.log(cartItems_);
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };
  if (cartItems_.length === 0) {
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
          disabled={cartItems_.length === 0}
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
            {cartItems_.map((item) => (
              <>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.price * item.count}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    );
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
