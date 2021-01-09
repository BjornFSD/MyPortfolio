import React, { useState } from "react";
import emailjs from "emailjs-com";

function FormEmail(e) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError(true);
      // console.log("Name true = " + nameError);
      return;
    } else {
      setNameError(false);
      // console.log("Name false = " + nameError);
    }

    if (!email.includes("@")) {
      setEmailError(true);
      // console.log("Email true = " + nameError);
      return;
    } else setEmailError(false);
    // console.log("Email false = " + nameError);

    if (message === "") {
      setMessageError(true);
      // console.log("Message true = " + nameError);
      return;
    } else setMessageError(false);
    // console.log("Message false = " + nameError);

    if (subject === "") {
      setSubjectError(true);
      //   console.log("Subject true = " + nameError);
      return;
    } else setSubjectError(false);
    // console.log("Subject false = " + nameError);

    emailjs
      .sendForm(
        "service_6q7dk2j",
        "template_736o5fo",
        e.target,
        "user_0oF4aMnPDL62XlnpMjaPB"
      )
      .then(
        (result) => {
          alert("Mail has been sent.");
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
        {nameError === true ? (
          <div style={{ color: "red" }}>Name Required</div>
        ) : null}
        <input
          type="text"
          className="form_control"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {emailError === true ? (
          <div style={{ color: "red" }}>Email is missing</div>
        ) : null}
        <input
          type="email"
          className="form_control"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {subjectError === true ? (
          <div style={{ color: "red" }}>Subject is missing</div>
        ) : null}
        <input
          type="text"
          className="form_control"
          placeholder="Subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {messageError === true ? (
          <div style={{ color: "red" }}>Message is missing</div>
        ) : null}
        <textarea
          className="form_control txt"
          placeholder="Your Message..."
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className="form_control btn" type="submit" value="SendMessage" />
      </form>
    </div>
  );
}

export default FormEmail;
