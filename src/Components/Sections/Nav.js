import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_name">
        <p>Michał Dulko</p>
      </div>
      <ul className="nav_ul">
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".home").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          home
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".projects").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          projects
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".skills").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          skills
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".about").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          about me
        </li>
        <li
          className="nav_ul-li"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".contact").offsetTop,
              behavior: "smooth",
            });
          }}
        >
          contact
        </li>
      </ul>
    </div>
  );
}

export default Nav;
