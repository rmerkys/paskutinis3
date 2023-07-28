import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import SocialMediaContainer from "./SocialMediaContainer";
import Validation from "./Validation";

export default function RightSide() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = ({ formData, validation }) => {
    if (validation.formValid) {
      alert(
        `Sveikiname sėkmingai užsiregistravus
      `
      );

      let data = Object.values(formData);

      fetch("http://localhost:4000/participants/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      console.log(JSON.stringify(data));
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  };
  return (
    <div className="rightSideContainer">
      <h1>Get Started</h1>
      <p>Already have an account?</p>
      <a href="/">Log in</a>
      <SocialMediaContainer />
      <h4>Or</h4>
      <Validation
        render={(validateForm) => (
          <RegistrationForm
            onSubmit={handleFormSubmit}
            validateForm={validateForm}
            formSubmitted={formSubmitted}
          />
        )}
      />
    </div>
  );
}
