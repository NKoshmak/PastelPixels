"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const templates = {
  framer: [
    {
      title: "Fitness/Personal Trainer Framer Template",
      image: "/images/4.png",
      link: "https://gofit.framer.website",
      buy: "https://pastelpixels.lemonsqueezy.com/buy/a94e2f4c-811b-455e-868f-414b641eac7f",
    },
    {
      title: "Wellness Coach Framer Template",
      image: "/images/wellness_framer.png",
      link: "https://sensitive-work-982584.framer.app",
      buy: "https://yourstore.com/buy/wellness-coach",
    },
    
  ],
  kajabi: [
    // {
    //   title: "Beauty Services",
    //   image: "/images/kajabi-beauty.jpg",
    //   link: "https://pastelpixelsstudio.com/kajabi-beauty",
    //   buy: "https://yourstore.com/buy/beauty-services",
    // },
    // {
    //   title: "Fitness & Nutrition",
    //   image: "/images/kajabi-fitness.jpg",
    //   link: "https://pastelpixelsstudio.com/kajabi-fitness",
    //   buy: "https://yourstore.com/buy/fitness-nutrition",
    // },
  ],
  html: [
    // {
    //   title: "Bakery Site",
    //   image: "/images/html-bakery.jpg",
    //   link: "https://pastelpixelsstudio.com/bakery",
    //   buy: "https://yourstore.com/buy/bakery-site",
    // },
    // {
    //   title: "Portfolio One-Pager",
    //   image: "/images/html-portfolio.jpg",
    //   link: "https://pastelpixelsstudio.com/portfolio",
    //   buy: "https://yourstore.com/buy/portfolio-one-pager",
    // },
  ],
};

export default function TemplatesPage() {
  return (
    <>
      <Head>
        <title>Templates — Pastel Pixels</title>
        <meta
          name="description"
          content="Shop Framer, Kajabi and HTML templates for creatives and coaches."
        />
      </Head>

      <main>
        <section className="contact-wrapper">
          <section className="shop-page">
            <section className="shop-hero">
              <h1>Shop Templates</h1>
              <p>
                Minimal. Feminine. Functional. Crafted for creators, coaches,
                and soulful brands.
              </p>
            </section>

            <TemplateSection
              id="framer"
              title="Framer Templates"
              items={templates.framer}
            />
            {/* <TemplateSection
              id="kajabi"
              title="Kajabi Templates"
              items={templates.kajabi}
            />
            <TemplateSection
              id="html"
              title="HTML Templates"
              items={templates.html}
            /> */}
          </section>
        </section>
      </main>
    </>
  );
}

function TemplateSection({ id, title, items }) {
   const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".template-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id={id} className="template-section" ref={sectionRef}>
      <h2>{title}</h2>
      <div className="template-grid">
        {items.map((template, index) => (
          <div key={index} className="template-card">
            <div className="image-wrapper">
              <Image
                src={template.image}
                alt={template.title}
                width={600}
                height={400}
                className="template-image"
              />
            </div>
            <h3>{template.title}</h3>
            <div className="template-buttons">
              <Link
                href={template.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                Live Preview →
              </Link>
              <Link
                href={template.buy}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Buy Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}