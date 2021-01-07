import "./App.scss";
import React, { useRef } from "react";
// import { useWindowScroll } from "react-use";

import Sections from "./Components/Sections";

//gsap.registerPlugin(DrawSVGPlugin);

function App() {
  const refToTop = useRef(null);

  // const { y: pageYOffset } = useWindowScroll();

  return (
    <div ref={refToTop} className="App">
      <Sections />
    </div>
  );
}

export default App;
