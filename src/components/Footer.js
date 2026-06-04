"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* Main Content Row: Left side CTA + socials, Middle side vertical nav, Right side phone mockup */}
        <div className="footer-main-row">
          {/* Left Column */}
          <div className="footer-left-col">
            <div className="footer-cta-group">
              <p className="footer-cta-text">I&apos;m excited to hear from you!</p>
              <a href="mailto:faridbpi10@gmail.com" className="footer-email">
                faridbpi10@gmail.com
              </a>
            </div>
            
            <div className="footer-socials-group">
              <div className="footer-social-icons">
                {/* GitHub */}
                <a href="https://github.com/bddevfarid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                {/* WordPress Profile */}
                <a href="https://profiles.wordpress.org/mohammaadfarid/" target="_blank" rel="noopener noreferrer" aria-label="WordPress Profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/8801780116464" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
              <p className="footer-copyright">© Faridul. All rights reserved.</p>
            </div>
          </div>

          {/* Middle Column (Vertical Navbar) */}
          <div className="footer-mid-col">
            <nav className="footer-vertical-nav">
              <a href="#work">My Work</a>
              <a href="#about">About me</a>
              <a href="#feedback">Contact me</a>
            </nav>
          </div>

          {/* Right Column (Phone Mockup) */}
          <div className="footer-right-col">
            <div className="footer-mockup-wrapper">
              <span className="footer-year-label">©2026</span>
              <div className="footer-phone-mockup">
                <Image
                  src="/images/footer-shape.jpg"
                  alt="Asterisk Star Shape"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 150px, 210px"
                  priority
                />
              </div>
              <span className="footer-handle">@bddevfarid</span>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <button className="footer-back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
            <span className="footer-big-dot"></span>
            <span className="footer-big-name">Faridul.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
