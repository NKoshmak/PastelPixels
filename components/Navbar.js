"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-left">Pastel Pixels Studio</Link>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-center ${isOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/shop">Shop Template</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}