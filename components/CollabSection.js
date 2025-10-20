"use client";
import Link from "next/link"; 
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CollabSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".collab-bg",
        { y: "-20vh", scale: 1.05 },
        {
          y: "20vh",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".collab-section",
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
    <section className="collab-section" ref={sectionRef}>
      <div className="collab-bg" />
      <div className="collab-overlay">
        <div className="collab-content">
          <p>
            As a multidisciplinary branding studio, we support<br />
            partners and businesses in reaching their target<br />
            market and showcasing their entire potential.
          </p>
          <p>
            We would be pleased to collaborate with you to<br />
            start from scratch or to step in when necessary.
          </p>
          <Link href="/contact" className="collab-link">
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}