"use client";

import { useState } from "react";
import Image from "next/image";

export default function BestWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      image: "/images/best-work.png",
      title: "UI ELEMENTOR",
      category: "Creative Portfolio Website Design",
    },
    {
      image: "/images/portfolio-1.png",
      title: "WEBFLOW TEMPLATE",
      category: "SaaS App Product Landing Page",
    },
    {
      image: "/images/portfolio-3.png",
      title: "BRAND IDENTITY",
      category: "Visual Identity for Creative Studio",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="best-work-section" id="best-work">
      <div className="best-work-inner">
        <div className="section-header">
          <div>
            <h2 className="best-work-title">
              Showcasing
              <br />
              My Best Work
            </h2>
          </div>
          <span className="section-subtitle">// FEATURED</span>
        </div>

        <div className="best-work-showcase">
          {/* Sliding Track */}
          <div
            className="best-work-track"
            style={{
              display: "flex",
              width: "100%",
              height: "480px",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="best-work-slide"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                  sizes="(max-width: 1200px) 100vw, 1170px"
                />
              </div>
            ))}
          </div>

          {/* Shared Overlay (Text & Navigation) */}
          <div className="best-work-overlay">
            <div className="best-work-info">
              <h3>{items[currentIndex].title}</h3>
              <p>{items[currentIndex].category}</p>
            </div>
            <div className="best-work-nav">
              <button
                className="best-work-nav-btn"
                aria-label="Previous"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{
                  opacity: currentIndex === 0 ? 0.35 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                className="best-work-nav-btn"
                aria-label="Next"
                onClick={handleNext}
                disabled={currentIndex === items.length - 1}
                style={{
                  opacity: currentIndex === items.length - 1 ? 0.35 : 1,
                  cursor: currentIndex === items.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
