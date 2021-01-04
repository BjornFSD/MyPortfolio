import React from "react";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

function Sections() {
  return (
    <div className="sections">
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default Sections;
