import React from "react";
import "./SignInMain.css";
import SignInForm from "./SignInForm.js";
// import "../Header&Footer/H&H.css";
import avatar from "../images/avatar.png";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

import AudioPlayer from "react-h5-audio-player";
import People from "../../audio/People.mp3";

// function makeSlideShow(slidesId) {
//   let slidesInner = document.querySelector(".slides-inner");
//   let images = document.querySelectorAll("#img");

//   let index = 0;

//   setInterval(function () {
//     index += 1;
//     if (index === images.length) {
//       index = 0;
//     }

//     slidesInner.style.transform = `translate3d(${index * -440}px, 0, 0)`;
//   }, 2000);
// }
// makeSlideShow("slides");

function SignInMain() {
  return (
    <div className="sign-in-container container-fluid d-flex justify-content-evenly">
      <main className="order-2">
        <h2 className="animationPulse">❤Pray for Ukraine❤</h2>
        <img
          src={avatar}
          alt="Фото"
          className="avatar d-block shadow-lg p-3 mb-5 bg-body rounded"
        />

        <SignInForm />
        <AudioPlayer className="audioPlayer" src={People} autoPlay />
      </main>

      <div id="slides" className="slide-show">
        <div className="slides-inner">
          <img
            src={img1}
            width="440"
            height="475"
            alt="God'sMother"
            className="shadow"
            id="img"
          />
          <img
            src={img2}
            width="440"
            height="475"
            alt="DayOfStartWar"
            id="img"
            className="shadow"
          />
          <img
            src={img3}
            width="440"
            height="475"
            alt="OursAngel"
            className="shadow"
            id="img"
          />
          <img
            src={img4}
            width="440"
            height="475"
            alt="UkrainianSoldiers"
            className="shadow"
            id="img"
          />
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}

export default SignInMain;
