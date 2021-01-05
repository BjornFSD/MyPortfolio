import React from "react";
import SkillsImg from "./img/Skills.png";

function Skills() {
  const Icons = [
    { src: "./img/icons/html.png", name: "HTML" },
    { src: "./img/icons/css.png", name: "CSS" },
    { src: "./img/icons/sass.png", name: "SASS" },
    { src: "./img/icons/bootstrap.png", name: "BOOTSTRAP" },
    { src: "./img/icons/js.png", name: "JAVASCRIPT" },
    { src: "./img/icons/react.png", name: "REACT" },
    { src: "./img/icons/redux.png", name: "REDUX" },
    { src: "./img/icons/gsap.png", name: "GSAP" },
    { src: "./img/icons/git.png", name: "GIT" },
    { src: "./img/icons/figma.png", name: "FIGMA" },
  ];
  const showIcons = Icons.map((item, index) => {
    return (
      <div className="skills_box-item" key={index}>
        <div className="skills_box-item--img">
          <img src={item.src} alt="" />
        </div>
        <div className="skills_box-item--name">
          <h3>{item.name}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className="skills">
      <div className="skills_img">
        <img src={SkillsImg} alt="" />
      </div>
      <div className="skills_box">{showIcons}</div>
      <div className="skills_desc">
        <p>
          Here is my list of libraries and frameworks im currently using, still
          learning. My main technology is <b>React</b> and I'm looking forward
          to learn <b>React Native</b>, I know basics of <b>Redux</b>, but i
          prefer keeping state with <b>useState</b>. I'm using <b>Figma</b> to
          design layouts. I love making animations with <b>GSAP</b> library and
          I track my changes with <b>GIT</b>.
        </p>
        <p>
          I also like making json files or arrays with objects etc. and mapping
          them.
        </p>
      </div>
    </div>
  );
}

export default Skills;
