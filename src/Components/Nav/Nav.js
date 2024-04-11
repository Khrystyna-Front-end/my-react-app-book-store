import React, { useState, useEffect } from "react";
import "./Nav.css";
import avatarMini from "../images/avatarMini.png";
import cart from "../images/cart.svg";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  const Username = localStorage.getItem("Username");
  // const [count, setCount] = useState(localStorage.getItem("count") || 0);

  // Update count when the component mounts
  // function changeCount() {
  //   setCount((count) => Number(count));
  // }

  // useEffect(() => {
  //   setCount(localStorage.getItem("count"));
  // }, []);
  // const [count, setCount] = useState(null);
  // useEffect(() => {
  //   const count = JSON.parse(localStorage.getItem("count"));
  //   console.log(count);
  //   if (count) {
  //     setCount(count);
  //   }
  // }, [count]);
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  const data = JSON.parse(localStorage.getItem("cart")) || {};

  let amount = Object.values(data);

  const initialValue = 0;
  const count = amount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <nav>
      <div className="nav d-flex">
        <div className="left-side d-flex">
          <img src={logo} alt="Logo" width="42" height="38" className="logo" />
          <h1>JS BAND STORE / Your full name</h1>
        </div>
        <div className="right-side d-flex">
          <Link to="/cart">
            <img
              src={cart}
              alt="cart"
              className="cart"
              width="80px"
              height="80px"
            />
          </Link>
          <span className="generalCount">{count}</span>
          <button className="sign-out btn btn-primary" onClick={handleClick}>
            <Link className="link-sign-out" to="/">
              Sign-out
            </Link>
          </button>
          <img
            src={avatarMini}
            alt="Фото"
            width="30px"
            height="30px"
            className="avatarMini"
          />
          <h6 className="userName">{Username ? `${Username}` : "Username"}</h6>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
