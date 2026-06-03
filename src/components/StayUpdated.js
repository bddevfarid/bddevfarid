import Image from "next/image";

export default function StayUpdated() {
  const posts = [
    {
      src: "/images/blog-1.png",
      alt: "Creative Vision 2024",
      date: "Dec 15, 2024",
      category: "Design",
      title: "How to Build a Stunning Portfolio Website",
    },
    {
      src: "/images/blog-2.png",
      alt: "Portfolio Showcase",
      date: "Nov 28, 2024",
      category: "Development",
      title: "Top 10 Web Design Trends for 2024",
    },
  ];

  return (
    <section className="updated-section" id="blog">
      <div className="updated-inner">
        <div className="section-header">
          <div>
            <h2 className="updated-title">
              Stay Updated on
              <br />
              Our Progress
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span className="section-subtitle">// BLOG</span>
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

        <div className="updated-grid">
          {posts.map((post, index) => (
            <div key={index} className="updated-card" id={`blog-card-${index}`}>
              <div className="updated-card-image">
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={570}
                  height={280}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="updated-card-content">
                <div className="updated-card-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="updated-card-title">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
