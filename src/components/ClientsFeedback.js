"use client";

import { useState } from "react";
import Image from "next/image";

export default function ClientsFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/images/client-avatar-2.png",
      quote:
        "The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance.",
      name: "Dhimmo Reijnder",
      role: "Founder, The Gems",
    },
    {
      image: "/images/client-avatar.png",
      quote:
        "I was blown away by the quality of work. It took much less time than I expected.",
      name: "Jenny Wilson",
      role: "Founder, Flavor",
    },
    {
      image: "/images/client-avatar-3.png",
      quote:
        "Exceptional design skills and great communication throughout the entire project delivery.",
      name: "Mark Thompson",
      role: "CEO, Starter Co.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="feedback-section" id="feedback">
      <div className="feedback-inner">
        {/* Header */}
        <div className="feedback-header">
          <div>
            <h2 className="feedback-title">Clients feedback</h2>
            <p className="feedback-subtitle">
              Exploring Creativity A Portfolio Inspired by
              <br />
              Architecture, Nature, and Modern Art
            </p>
          </div>
        </div>

        {/* Testimonial cards row */}
        <div className="feedback-track-wrapper">
          <div
            className="feedback-track"
            style={{
              transform: `translateX(-${currentIndex * 510}px)`, // 480px width + 30px gap
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="feedback-card" id={`feedback-card-${index}`}>
                <div className="feedback-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={220}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="feedback-card-content">
                  <div className="feedback-quote-icon">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                      <path
                        d="M0 24V14.4C0 11.7333 0.466667 9.33333 1.4 7.2C2.37778 5.02222 3.68889 3.2 5.33333 1.73333C7.02222 0.222222 8.93333 -0.577778 11.0667 -0.666667L12 2.66667C10.1778 3.06667 8.62222 4.08889 7.33333 5.73333C6.08889 7.33333 5.46667 9.15556 5.46667 11.2H12V24H0ZM20 24V14.4C20 11.7333 20.4667 9.33333 21.4 7.2C22.3778 5.02222 23.6889 3.2 25.3333 1.73333C27.0222 0.222222 28.9333 -0.577778 31.0667 -0.666667L32 2.66667C30.1778 3.06667 28.6222 4.08889 27.3333 5.73333C26.0889 7.33333 25.4667 9.15556 25.4667 11.2H32V24H20Z"
                        fill="#4A5840"
                      />
                    </svg>
                  </div>
                  <p className="feedback-card-text">{item.quote}</p>
                  <div className="feedback-card-author">
                    <h4 className="feedback-card-name">{item.name}</h4>
                    <span className="feedback-card-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="feedback-nav">
          <button
            className="feedback-nav-btn"
            aria-label="Previous testimonial"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              opacity: currentIndex === 0 ? 0.3 : 1,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            className="feedback-nav-btn"
            aria-label="Next testimonial"
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            style={{
              opacity: currentIndex === testimonials.length - 1 ? 0.3 : 1,
              cursor: currentIndex === testimonials.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
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
    </section>
  );
}
