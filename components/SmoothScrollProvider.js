"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    let scrollY = 0;
    let raf;

    const updateScroll = () => {
      scrollY += (window.scrollY - scrollY) * 0.1;
      if (content) content.style.transform = `translateY(${-scrollY}px)`;
      raf = requestAnimationFrame(updateScroll);
    };

    raf = requestAnimationFrame(updateScroll);

    ScrollTrigger.scrollerProxy(wrapper, {
      scrollTop(value) {
        if (arguments.length) window.scrollTo(0, value);
        return window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: wrapper });
    ScrollTrigger.refresh();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}