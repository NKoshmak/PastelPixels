'use client';

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) return; // 🚫 Skip Lenis on mobile

    // ✅ Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis;

    // ✅ Sync Lenis with GSAP ScrollTrigger
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    gsap.ticker.lagSmoothing(0); // Removes GSAP delays
    lenis.on("scroll", ScrollTrigger.update);
    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value);
        }
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
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    // ✅ Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}