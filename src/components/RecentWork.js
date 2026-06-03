import Image from "next/image";

export default function RecentWork() {
  const works = [
    {
      src: "/images/portfolio-1.png",
      alt: "Element Pack Lite",
      label: "Elementor Addon Plugin",
      link: "https://wordpress.org/plugins/bdthemes-element-pack-lite/",
    },
    {
      src: "/images/portfolio-2.png",
      alt: "Prime Slider Lite",
      label: "WordPress Slider Plugin",
      link: "https://wordpress.org/plugins/bdthemes-prime-slider-lite/",
    },
    {
      src: "/images/portfolio-3.png",
      alt: "WordPress Plugins Profile",
      label: "WordPress.org Contributor",
      link: "https://profiles.wordpress.org/mohammaadfarid/#content-plugins",
    },
  ];

  return (
    <section className="recent-work-section" id="work">
      <div className="recent-work-inner">
        <div className="section-header">
          <div>
            <h2 className="section-title">Recent Work</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span className="section-subtitle">// PORTFOLIO</span>
            <div className="section-arrow">
              <svg
                width="16"
                height="16"
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
        </div>

        <div className="work-grid">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item"
              id={`work-item-${index}`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                width={370}
                height={370}
                style={{ objectFit: "cover" }}
              />
              <div className="work-item-overlay">
                <h3>{work.alt}</h3>
                <span>{work.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
