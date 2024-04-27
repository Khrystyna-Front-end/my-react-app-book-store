import React from "react";
import "./SignInMain.css";
import SignInForm from "../SignInForm/SignInForm.js";
import avatar from "../../../media/images/avatar.png";
import img1 from "../../../media/images/img1.jpg";

import AudioPlayer from "react-h5-audio-player";
import People from "../../../media/audio/People.mp3";

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
                </div>
      </div>
    </div>
  );
}

export default SignInMain;
