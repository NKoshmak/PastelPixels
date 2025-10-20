/** @format */

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-label">Overview</div>

      <div className="content">
        <div className="about-content">
          <p>
            Pastel Pixels Studio is a creative atelier specializing in digital
            templates and design systems that blend beauty with purpose. We
            craft clean, expressive designs that empower modern creatives to
            showcase their work with clarity and confidence.
          </p>

          <p>
            We believe design should feel soft, intentional, and emotionally
            resonant — and we’re here to help you express your story with grace,
            personality, and impact.
          </p>
        </div>

        <Link
          href="mailto:pastelpixelsstudio6@gmail.com"
          className="about-link"
        >
          Get in touch →
        </Link>
      </div>

      {/* <a href="#" className="about-link">About Us →</a> */}
    </section>
  );
}
