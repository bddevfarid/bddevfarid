"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Top bar */}
        <div className="hero-topbar">
          <button className="hero-logo-icon" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="#1A1A1A" strokeWidth="1.2" />
              <line x1="10" y1="13" x2="26" y2="13" stroke="#1A1A1A" strokeWidth="1.2" />
              <line x1="10" y1="18" x2="26" y2="18" stroke="#1A1A1A" strokeWidth="1.2" />
              <line x1="10" y1="23" x2="26" y2="23" stroke="#1A1A1A" strokeWidth="1.2" />
            </svg>
          </button>
          <span className="hero-year">©2026</span>
        </div>

        {/* Label row */}
        <div className="hero-labels">
          <div className="hero-label-group">
            <span>Creative</span>
            <span>Developer</span>
          </div>
          <div className="hero-label-group">
            <span>Product</span>
            <span>Manager</span>
          </div>
          <div className="hero-label-single">
            <span>Since 2015</span>
          </div>
        </div>

        {/* Main content area: name behind, image on top */}
        <div className="hero-main">
          {/* Name text - sits behind the image */}
          <h1 className="hero-name">Faridul.</h1>

          {/* Image - overlaps the name text */}
          <div className="hero-image-block">
            <Image
              src="/images/hero-portrait.png"
              alt="Faridul Islam"
              width={920}
              height={580}
              priority
              className="hero-portrait-img"
            />
            {/* Custom Shape on top of image */}
            <div className="hero-qr-wrap">
              <Image
                src="/images/hero-shape.png"
                alt="Custom Shape"
                width={88}
                height={88}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Overlay Menu */}
      <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-overlay-header">
          <span className="nav-overlay-logo">Faridul.</span>
          <button className="nav-close-btn" onClick={toggleMenu} aria-label="Close menu">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="#FFF" strokeWidth="1.2" />
              <path d="M12 12L24 24M24 12L12 24" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="nav-overlay-links">
          <a href="#hero" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About me</a>
          <a href="#skills-experience" onClick={toggleMenu}>Skills &amp; Exp</a>
          <a href="#work" onClick={toggleMenu}>Portfolio</a>
          <a href="#services" onClick={toggleMenu}>My Services</a>
          <a href="#blog" onClick={toggleMenu}>Stay Updated</a>
          <a href="#feedback" onClick={toggleMenu}>Clients Feedback</a>
          <a href="#footer" className="nav-overlay-cta" onClick={toggleMenu}>HIRE ME</a>
        </nav>
        <div className="nav-overlay-footer">
          <span>©2026 Faridul. All rights reserved.</span>
          <div className="nav-overlay-socials">
            <a href="https://github.com/bddevfarid" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://profiles.wordpress.org/mohammaadfarid/" target="_blank" rel="noopener noreferrer">WordPress</a>
            <a href="https://wa.me/8801780116464" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
