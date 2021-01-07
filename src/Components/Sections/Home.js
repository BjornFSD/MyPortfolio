import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import { ReactComponent as HomeAnimation1920 } from "../../HomeAnimation1920x980.svg";
import { ReactComponent as HomeAnimation1440 } from "../../HomeAnimation1440x800.svg";
import { ReactComponent as HomeAnimation1024 } from "../../HomeAnimation1024x600.svg";
import { ReactComponent as HomeAnimation768 } from "../../HomeAnimation768x600.svg";
import { ReactComponent as HomeAnimation420 } from "../../HomeAnimation420x600.svg";
import { ReactComponent as HomeAnimation320 } from "../../HomeAnimation320x500.svg";
import { gsap } from "gsap";

function Home() {
  const wrapper2 = useRef(null);

  useEffect(() => {
    const [elements] = wrapper2.current.children;
    const Steps1 = elements.getElementById("Steps");
    // const Steps2 = elements.getElementById("Steps2");
    // const Steps3 = elements.getElementById("Steps3");
    // const Steps4 = elements.getElementById("Steps4");

    const duration = 1;
    const stagger = 0.4;

    gsap.set([...Steps1.children], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: "Power1.easeIn" },
    });

    if (window.innerWidth < 426) {
      tl.to(Steps1.children, {
        duration: duration,
        autoAlpha: 1,
        stagger: stagger,
        delay: 0,
      })
        .to(Steps1.children, {
          duration: duration,
          autoAlpha: 0,
          stagger: stagger,
          delay: -30,
        })
        .repeat(-1);
    } else {
      tl.to(Steps1.children, {
        duration: duration,
        autoAlpha: 1,
        stagger: stagger,
        delay: 0,
      })
        .to(Steps1.children, {
          duration: duration,
          autoAlpha: 0,
          stagger: stagger,
          delay: -45,
        })
        .repeat(-1);
    }
  }, [window.innerWidth]);

  return (
    <div className="home">
      <Nav />
      <div className="home_animation" ref={wrapper2}>
        {window.innerWidth < 375 ? (
          <HomeAnimation320 />
        ) : window.innerWidth < 430 ? (
          <HomeAnimation420 />
        ) : window.innerWidth < 768 ? (
          <HomeAnimation768 />
        ) : window.innerWidth < 1024 ? (
          <HomeAnimation1024 />
        ) : window.innerWidth < 1400 ? (
          <HomeAnimation1440 />
        ) : (
          <HomeAnimation1920 />
        )}
      </div>
      <div className="home_name">
        Michał Dulko
        <br />
        Frontend
        <br />
        Developer
        <br />
        Design
        <br />
        Websites
      </div>
    </div>
  );
}

export default Home;
