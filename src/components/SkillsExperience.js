"use client";

import { useState } from "react";

export default function SkillsExperience() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const experiences = [
    {
      company: "Sigmative",
      role: "Lead Software Engineer (Elementor Addons)",
      duration: "2025 - Present",
      description: "Directing the engineering efforts for premium Elementor addons. Designing high-performance React-based UI elements, custom WordPress plugins, and modular widgets. Mentoring junior developers and streamlining Vite-based frontend bundling to improve team velocity by 40%."
    },
    {
      company: "BdThemes ltd",
      role: "Senior Plugin Developer",
      duration: "2019 - 2025",
      description: "Successfully engineered and maintained widely-used WordPress plugins and addon packs including Element Pack and Prime Slider (powering millions of websites worldwide). Developed lightweight and responsive widgets, custom PHP API integrations, and optimized loading speeds for media-heavy frontend components."
    },
    {
      company: "The Codude",
      role: "Web & WordPress Theme Developer",
      duration: "2016 - 2018",
      description: "Developed and launched cross-browser responsive WordPress themes and HTML5/CSS3 templates. Focused on semantic markup, custom jQuery interactivity, and migrating client databases securely to modern web platforms."
    }
  ];

  const skills = [
    {
      name: "HTML5",
      level: "Expert",
      percentage: 95,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      name: "CSS3 / Styling",
      level: "Expert",
      percentage: 92,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.14-.367a3 3 0 115.66 0l.14.367m-5.94 0L8 21h8l-2.06-4.878M9 11h.008v.008H9V11zm3 0h.008v.008H12V11zm3 0h.008v.008H15V11z" />
        </svg>
      )
    },
    {
      name: "JavaScript (ES6+)",
      level: "Expert",
      percentage: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    },
    {
      name: "PHP",
      level: "Advanced",
      percentage: 88,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V5.25m3 9a3 3 0 003 3h7.5a3 3 0 003-3m-13.5 0a3 3 0 003 3m10.5-3v-6a3 3 0 00-3-3H9m6 0a3 3 0 00-3 3v6" />
        </svg>
      )
    },
    {
      name: "React",
      level: "Advanced",
      percentage: 86,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12-6L9 18m6 0L9 6" />
        </svg>
      )
    },
    {
      name: "Next.js",
      level: "Advanced",
      percentage: 82,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l3 5 3-5" />
        </svg>
      )
    },
    {
      name: "Vibe Coding",
      level: "Advanced",
      percentage: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      name: "WordPress",
      level: "Expert",
      percentage: 95,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12c0-1.5-1.5-2.5-3-2.5S10.5 10.5 10.5 12s1.5 2.5 3 2.5 3-1 3-2.5z" />
        </svg>
      )
    },
    {
      name: "Elementor",
      level: "Expert",
      percentage: 95,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      )
    }
  ];

  return (
    <section className="skills-exp-section" id="skills-experience">
      <div className="skills-exp-inner">
        <div className="section-header">
          <div>
            <h2 className="section-title">Skills &amp; Experience</h2>
          </div>
          <span className="section-subtitle">// MY CAPABILITIES</span>
        </div>

        <div className="skills-exp-grid">
          {/* Skills Column */}
          <div className="skills-column">
            <h3 className="column-title">Technical Expertise</h3>
            <p className="column-intro">
              Leveraging modern technologies to build lightning-fast web applications, customized CMS solutions, and pixel-perfect UI.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const isHovered = hoveredSkill === index;
                return (
                  <div
                    key={index}
                    className={`skill-card ${isHovered ? "active" : ""}`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-card-top">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-meta">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                    
                    {/* Minimal percentage bar */}
                    <div className="skill-progress-wrap">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Column */}
          <div className="experience-column">
            <h3 className="column-title">Professional Journey</h3>
            
            <div className="experience-timeline">
              <div className="timeline-line"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot-container">
                    <div className="timeline-dot"></div>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-duration">{exp.duration}</span>
                      <h4 className="timeline-company">{exp.company}</h4>
                      <span className="timeline-role">{exp.role}</span>
                    </div>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
