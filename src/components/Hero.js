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
            {/* QR Code on top of image */}
            <div className="hero-qr-wrap">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Finder patterns & modules */}
                <rect x="4" y="4" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="8" y="8" width="16" height="16" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="12" y="12" width="8" height="8" fill="#fff" />
                <rect x="62" y="4" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="66" y="8" width="16" height="16" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="70" y="12" width="8" height="8" fill="#fff" />
                <rect x="4" y="62" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="8" y="66" width="16" height="16" stroke="#fff" strokeWidth="2" fill="none" />
                <rect x="12" y="70" width="8" height="8" fill="#fff" />
                <rect x="34" y="10" width="5" height="5" fill="#fff" />
                <rect x="42" y="10" width="5" height="5" fill="#fff" />
                <rect x="50" y="10" width="5" height="5" fill="#fff" />
                <rect x="34" y="18" width="5" height="5" fill="#fff" />
                <rect x="50" y="18" width="5" height="5" fill="#fff" />
                <rect x="10" y="34" width="5" height="5" fill="#fff" />
                <rect x="18" y="34" width="5" height="5" fill="#fff" />
                <rect x="34" y="34" width="5" height="5" fill="#fff" />
                <rect x="42" y="34" width="5" height="5" fill="#fff" />
                <rect x="50" y="34" width="5" height="5" fill="#fff" />
                <rect x="62" y="34" width="5" height="5" fill="#fff" />
                <rect x="70" y="34" width="5" height="5" fill="#fff" />
                <rect x="78" y="34" width="5" height="5" fill="#fff" />
                <rect x="34" y="42" width="5" height="5" fill="#fff" />
                <rect x="50" y="42" width="5" height="5" fill="#fff" />
                <rect x="42" y="42" width="5" height="5" fill="#fff" />
                <rect x="10" y="50" width="5" height="5" fill="#fff" />
                <rect x="18" y="50" width="5" height="5" fill="#fff" />
                <rect x="34" y="50" width="5" height="5" fill="#fff" />
                <rect x="42" y="50" width="5" height="5" fill="#fff" />
                <rect x="50" y="50" width="5" height="5" fill="#fff" />
                <rect x="62" y="50" width="5" height="5" fill="#fff" />
                <rect x="78" y="50" width="5" height="5" fill="#fff" />
                <rect x="34" y="62" width="5" height="5" fill="#fff" />
                <rect x="42" y="62" width="5" height="5" fill="#fff" />
                <rect x="50" y="62" width="5" height="5" fill="#fff" />
                <rect x="62" y="62" width="5" height="5" fill="#fff" />
                <rect x="78" y="62" width="5" height="5" fill="#fff" />
                <rect x="34" y="70" width="5" height="5" fill="#fff" />
                <rect x="50" y="70" width="5" height="5" fill="#fff" />
                <rect x="62" y="70" width="5" height="5" fill="#fff" />
                <rect x="70" y="70" width="5" height="5" fill="#fff" />
                <rect x="78" y="70" width="5" height="5" fill="#fff" />
                <rect x="34" y="78" width="5" height="5" fill="#fff" />
                <rect x="42" y="78" width="5" height="5" fill="#fff" />
                <rect x="50" y="78" width="5" height="5" fill="#fff" />
                <rect x="62" y="78" width="5" height="5" fill="#fff" />
                <rect x="78" y="78" width="5" height="5" fill="#fff" />
              </svg>
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
          <a href="#work" onClick={toggleMenu}>Portfolio</a>
          <a href="#services" onClick={toggleMenu}>My Services</a>
          <a href="#best-work" onClick={toggleMenu}>Featured Project</a>
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
