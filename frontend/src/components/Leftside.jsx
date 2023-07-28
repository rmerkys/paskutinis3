import React from "react";
import logo from "../assets/logo.svg";
import picture from "../assets/illustration.svg";

export default function Leftside() {
  return (
    <div className="leftSideContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo_image" />
      </div>
      <div className="mainPictureContainer">
        <img src={picture} alt="" />
      </div>
      <div className="textContainer">
        <h3>Start for free & Get </h3>
        <h3>Attractive offers Today !</h3>
      </div>
    </div>
  );
}
