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
            <p>
              Hi, My name is Michał Dulko I am 22 years old and I am a Front
              Developer with basics of design. I started learning programming
              half year ago, I spent this whole time on learning, and in half of
              this time it became my passion.
            </p>

            <div className="about_box-me--desc_more">
              <p>
                <b>More Information:</b>
              </p>
              <ul className="about_box-me--desc_more-list">
                <li className="about_box-me--desc_more-list--li">Age: 23</li>
                <li className="about_box-me--desc_more-list--li"></li>
                <li className="about_box-me--desc_more-list--li"></li>
                <li className="about_box-me--desc_more-list--li"></li>
                <li className="about_box-me--desc_more-list--li"></li>
              </ul>
            </div>
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
