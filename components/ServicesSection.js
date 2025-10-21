"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    useEffect(() => {
    gsap.set(".services-heading", { opacity: 0, y: 60 });
    gsap.set(".services-row", { opacity: 0, x: -60 });

    ScrollTrigger.create({
      trigger: ".services-table",
      start: "top 100%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(".services-heading", {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(".services-heading", {
          opacity: 0,
          y: -40,
          duration: 0.8,
          ease: "power3.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to(".services-heading", {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(".services-heading", {
          opacity: 0,
          y: 60,
          duration: 0.6,
          ease: "power3.inOut",
        });
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        ScrollTrigger.batch(".services-row", {
          start: "top 95%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.3,
              duration: 1.2,
              ease: "power3.out",
            });
          },
          onLeave: (batch) => {
            gsap.to(batch, {
              opacity: 0,
              x: -40,
              stagger: 0.2,
              duration: 0.8,
              ease: "power3.inOut",
            });
          },
          onEnterBack: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.3,
              duration: 1.2,
              ease: "power3.out",
            });
          },
          onLeaveBack: (batch) => {
            gsap.to(batch, {
              opacity: 0,
              x: -60,
              stagger: 0.2,
              duration: 0.8,
              ease: "power3.inOut",
            });
          },
        });
      },

      "(max-width: 768px)": function () {
        ScrollTrigger.batch(".services-row", {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
            });
          },
          onEnterBack: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
            });
          },
        });
      },
    });

    ScrollTrigger.refresh(); // ensure after mount

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="services-table" id="services">
      <h2 className="services-heading">Services</h2>

      <div className="main_line-services"></div>

      <div className="services-grid">
        <div className="services-row">
          <div className="services-cell cell-header">
            Custom Websites, Landing Pages
          </div>
          <div className="services-cell cell-text">
            Feminine, elegant websites, landing pages built
            for coaching, and creative brands
          </div>
          <div className="services-cell cell-text">HTML/CSS / Framer / Kajabi</div>
          <Image
            className="hover-image"
            src="/images/hover1.png"
            alt="Feminine, elegant websites, landing pages built
            for coaching, and creative brands HTML/CSS / Framer / Kajabi"
            width={350}
            height={200}
          />
        </div>

        <div className="services-row">
          <div className="services-cell cell-header">Front-End Development</div>
          <div className="services-cell cell-text">
            Responsive websites with clean, semantic code and smooth scroll
            animations
          </div>
          <div className="services-cell cell-text">HTML / CSS / JS/ GSAP</div>
          <Image
            className="hover-image"
            src="/images/1.png"
            alt="Responsive websites HTML / CSS / JS/ GSAP with clean, semantic code and smooth scroll
            animations"
            width={350}
            height={200}
          />
        </div>

        <div className="services-row">
          <div className="services-cell cell-header">UX/UI Design</div>
          <div className="services-cell cell-text">
            Thoughtful design systems and user flows focused on clarity and
            beauty
          </div>
          <div className="services-cell cell-text">Figma / Canva</div>
          <Image
            className="hover-image"
            src="/images/user_flow.png"
            alt="Thoughtful design systems and user flows focused on clarity and
            beauty, Figma / Canva"
            width={350}
            height={200}
          />
          
        </div>

        <div className="services-row">
          <div className="services-cell cell-header">Creative Direction</div>
          <div className="services-cell cell-text">
            Visual strategy and design polish for online presence
          </div>
          <div className="services-cell cell-text">Branding / Layout Systems</div>
          <Image
            className="hover-image"
            src="/images/hover5.png"
            alt="Branding, Layout Systems"
            width={350}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}