import React from "react";
import FormEmail from "./FormEmail";
import { ReactComponent as Facebook } from "./Svg/facebook.svg";
import { ReactComponent as Github } from "./Svg/github.svg";
import { ReactComponent as Linkedin } from "./Svg/linkedin.svg";
import { ReactComponent as Mail } from "./Svg/mail.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_email">
        <div className="contact_email-text">
          You can reach me down below here
        </div>
        <FormEmail />
        <div className="contact_email-text">Or here</div>
        <div className="contact_email-links">
          <a
            href="https://github.com/mrmisiex"
            className="contact_email-links--element"
          >
            <div className="icon">
              <Github />
            </div>
            <div className="text">mrmisiex</div>
          </a>
          <a
            href="https://www.linkedin.com/in/micha%C5%82-dulko-b17b271bb/"
            className="contact_email-links--element"
          >
            <div className="icon">
              <Linkedin />
            </div>
            <div className="text">Michał Dulko</div>
          </a>
          <a
            href="https://www.facebook.com/M.Dulko/"
            className="contact_email-links--element"
          >
            <div className="icon">
              <Facebook />
            </div>
            <div className="text">Michał Dulko</div>
          </a>
          <a href="" className="contact_email-links--element">
            <div className="icon">
              <Mail />
            </div>
            <div className="text">michal.dulko.12@gmail.com</div>
          </a>
        </div>
      </div>
      <div className="stopka">
        © 2020 Design & Developed by Michał Dulko . All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
