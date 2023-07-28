import React from "react";
import Button from "./Button";
import google from "../assets/google.svg";
import facebook from "../assets/icons8-facebook.svg";

export default function SocialMediaContainer() {
  return (
    <div className="socialMediaContainer">
      <Button icon={google} text="sign up" />
      <Button icon={facebook} text="sign up" />
    </div>
  );
}
