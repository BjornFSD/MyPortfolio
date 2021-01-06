import React from "react";
import AboutImg from "./img/About.png";

function About() {
  return (
    <div className="about">
      <div className="about_img">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about_box">
        <div className="about_box-me">
          <div className="about_box-me--img">
            <img src="./img/me.png" alt="" />
          </div>
          <div className="about_box-me--desc">
            <p className="about_box-me--desc_top">Hello</p>
            <p className="about_box-me--desc_middle">
              I'm a Frontend Developer with basics of design.
            </p>
            <p className="about_box-me--desc_bottom">
              My name is Michał Dulko I am 22 years old. I'm currently based in
              Gdansk, Poland. I started learning programming half year ago, I
              spent this whole time on learning, and in half of this time it
              became my passion.
            </p>
            <p className="about_box-me--desc_bottom">
              I would like begin traveller, most recently i think about it even
              more. I would like to visit Norway, USA, Spain and Iceland for
              now, but that list will still growing.
            </p>
          </div>
        </div>
      </div>
      <div className="about_hobby">
        <div className="about_hobby-box">
          <div className="about_hobby-box--item title">Hobbies:</div>
          <div className="about_hobby-box--item">Netflix</div>
          <div className="about_hobby-box--item">Witcher Saga</div>
          <div className="about_hobby-box--item">Harry Potter</div>
          <div className="about_hobby-box--item">Games</div>
          <div className="about_hobby-box--item">Football</div>
        </div>
      </div>
    </div>
  );
}

export default About;
