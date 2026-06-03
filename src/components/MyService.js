"use client";

import { useState } from "react";
import Image from "next/image";

export default function MyService() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const services = [
    {
      name: "Web Development",
      icon: "⟶",
      image: "/images/service-thumb.png",
    },
    {
      name: "UI/UX Design",
      icon: "⟶",
      image: "/images/portfolio-2.png",
    },
    {
      name: "SEO & AI Search Optimization",
      icon: "⟶",
      image: "/images/portfolio-3.png",
    },
    {
      name: "Elementor Addons",
      icon: "⟶",
      image: "/images/portfolio-1.png",
    },
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section className="service-section" id="services">
      <div className="service-inner">
        <div className="section-header">
          <div>
            <h2 className="section-title">My Service</h2>
          </div>
          <span className="section-subtitle">// WHAT I DO</span>
        </div>

        <div className="service-list">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="service-item"
                id={`service-item-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="service-item-left">
                  <span className="service-item-icon">{service.icon}</span>
                  <span className="service-item-name">{service.name}</span>
                </div>

                {/* Floating cursor-following preview image */}
                <div
                  className="service-hover-image-container"
                  style={{
                    left: `${mousePos.x + 20}px`,
                    top: `${mousePos.y - 150}px`,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "scale(1)" : "scale(0.8)",
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={300}
                    height={300}
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="service-item-arrow">
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
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
