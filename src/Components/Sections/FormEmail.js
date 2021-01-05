import React from "react";
import emailjs from "emailjs-com";

function FormEmail(e) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6q7dk2j",
        "template_736o5fo",
        e.target,
        "user_0oF4aMnPDL62XlnpMjaPB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <input
          type="text"
          className="form_control"
          placeholder="Your Name"
          name="name"
        />

        <input
          type="email"
          className="form_control"
          placeholder="Your Email"
          name="email"
        />
        <input
          type="text"
          className="form_control"
          placeholder="Subject"
          name="subject"
        />

        <textarea
          className="form_control txt"
          placeholder="Your Message..."
          name="message"
        />
        <input
          className="form_control btn"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
}

export default FormEmail;
