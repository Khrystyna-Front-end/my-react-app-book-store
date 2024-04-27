import React, { useState, useEffect } from "react";
import "./Nav.css";
import avatarMini from "../../media/images/avatarMini.png";
import cart from "../../media/images/cart.svg";
import logo from "../../media/images/logo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  const Username = localStorage.getItem("Username");
   const [showImageModal, setShowImageModal] = useState(false);

   const [avatar, setAvatar] = useState(
     localStorage.getItem("avatar") || avatarMini
   );
  
   useEffect(() => {
     localStorage.setItem("avatar", avatar);
   }, [avatar]);

   const handleImageClick = () => {
     setShowImageModal(true);
   };

   const handleImageUpload = (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();

     reader.readAsDataURL(file);

     reader.onloadend = () => {
       const imageSource = reader.result;
       setAvatar(imageSource);
     };
   };

   const handleCloseModal = () => {
     setShowImageModal(false);
   };

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
          <h1>
            <Link to="/books" className="name_store">JS BAND STORE / Your full name</Link>
          </h1>
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
            src={avatar}
            alt="Фото"
            width="30px"
            height="30px"
            className="avatarMini"
            onClick={handleImageClick}
          />
          <h6 className="userName">{Username ? `${Username}` : "Username"}</h6>

        </div>
        {showImageModal && (
          <div className="input__wrapper">
            <input
              type="file"
              onChange={handleImageUpload}
              id="input__file"
              className="input input__file"
              multiple
            />
            <label for="input__file" className="input__file-button">
              <span className="input__file-button-text">Choose photo</span>
            </label>
            <button className="input__button" onClick={handleCloseModal}>X</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;

  





    

      

      
