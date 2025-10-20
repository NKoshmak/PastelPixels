"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);


export default function ProjectsHero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-bg",
        { y: "-20vh" },
        {
          y: "20vh",
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-hero"  ref={sectionRef}>
      <div className="projects-bg" ref={bgRef} />

      <div className="projects-overlay">
        {/* <div className="projects-label">Selected Projects</div> */}

        <div className="projects-text">
          <p>
            Pastel Pixels Studio is a digital atelier that specializes in
            creating elegant, expressive design systems for modern creatives.
            We craft websites and brand visuals that resonate deeply, inspire
            trust, and invite engagement.
          </p>

          <p>
            Every brand has a story — and we’re here to help you tell yours
            beautifully, simply, and impactfully.
          </p>

          <Link href="/shop" className="projects-link">
            View Shop →
          </Link>
        </div>
      </div>
    </section>
  );
}