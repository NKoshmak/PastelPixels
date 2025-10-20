/** @format */

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef();
  const heroRevealRef = useRef();
  const heroImageRef = useRef();
  const heroContentRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Reveal animation
    tl.to(heroRevealRef.current, {
      y: "-100%",
      duration: 1.1,
      ease: "power4.inOut",
      onComplete: () => {
        heroRevealRef.current.style.display = "none";
      },
    }).to(
      heroContentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
      },
      "<+0.4"
    );
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      {/* Background image */}
      <div className="hero-image-wrapper">
        {/* <Image
          src="/images/bg1.jpg"
          alt="Hero"
          className="hero-image"
          ref={heroImageRef}
          fill
          priority
        /> */}
        <div className="hero-container">
          <video
            className="hero-image"
            ref={heroImageRef}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/images/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-overlay"></div>
        <div className="hero-reveal" ref={heroRevealRef}>Pastel Pixels Studio</div>
      </div>

      {/* Text content */}
      {/* <div className="hero-content" ref={heroContentRef}>
        <p>
          Pastel Pixels Studio is a digital atelier crafting elegant websites
          <br /> & brand visuals for modern creatives and soulful storytellers.
        </p>
      </div> */}
    </header>
  );
}
