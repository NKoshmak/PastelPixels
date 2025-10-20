'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section className="projects-grid" ref={sectionRef}>
      {/* Project 1 */}
      <div className="project-card">
        <Image
          src="/images/main1framer.png"
          alt="Cake Boutique Framer Template"
          className="project-image"
          width={800}
          height={500}
        />
        <div className="project-meta">
          {/* <span className="project-title">Cake Boutique</span> */}
          <span className="project-category">Framer Templates</span>
          <a
            className="project-info"
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All →
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card right-align">
        <Image
          src="/images/mainkajabi.png"
          alt="Kajabi Wellness, Coaching Template"
          className="project-image"
          width={600}
          height={400}
        />
        <div className="project-meta">
          <a
            className="project-info"
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All →
          </a>
          <span className="project-category">Kajabi Templates</span>
          {/* <span className="project-title">Kaily Wellness</span> */}
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <Image
          src="/images/1.png"
          alt="Cake Boutique HTML/CSS, JS Template"
          className="project-image"
          width={700}
          height={500}
        />
        <div className="project-meta">
          {/* <span className="project-title">Samantha Lens</span> */}
          <span className="project-category">HTML Templates</span>
          <a
            className="project-info"
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}