import React from "react";
import ProjectsImg from "./img/Projects.png";

function Projects() {
  const pCenter = {
    textAlign: "center",
  };
  const Projects = [
    {
      src: "./img/fashionSiteImg.png",
      title: "01. Online shop template",
      github: "https://github.com/mrmisiex/FashionHouseSite",
      website: "https://fashionhousesite.web.app/",
    },
    {
      src: "./img/architectSiteImgg.png",
      title: "02. Interior Designer portfolio",
      github: "https://github.com/mrmisiex/AleksandraCV",
      website: "https://aleksandraklinskacv.web.app/",
    },
    {
      src: "./img/poeSiteImg.png",
      title: "03. Path Of Exile account seeker",
      github: "https://github.com/mrmisiex/poe_app",
      website: "https://poeapp-bd890.web.app/",
    },
    {
      src: "./img/reactInPillImg.png",
      title: "04. React In Pill \n\n (college project)",
      github: "https://github.com/mrmisiex/react_tuturial",
      website: "https://reactinpill.web.app/",
    },
  ];

  const showProjects = Projects.map((item, index) => {
    return (
      <div className="projects_box-item" key={index}>
        <div className="projects_box-item--front">
          <img src={item.src} alt="" />
          <div className="projects_box-item--front_title">
            <p className="projects_box-item--front_title-p" style={pCenter}>
              {item.title}
            </p>
          </div>
        </div>
        <div className="projects_box-item--back">
          <a href={item.github}>
            <img src="./img/githublogo.png" alt="" />
          </a>
          <a href={item.website}>
            <img src="./img/weblogo.png" alt="" />
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="projects">
      <div className="projects_img">
        <img src={ProjectsImg} alt="" />
      </div>
      <div className="projects_box">{showProjects}</div>
    </div>
  );
}

export default Projects;
