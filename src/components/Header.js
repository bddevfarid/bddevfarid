export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header-inner">
        <a href="#" className="header-logo">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              r="13"
              stroke="#1A1A1A"
              strokeWidth="1.5"
            />
            <path
              d="M9 18V10h4.5c1.5 0 2.5 1 2.5 2.3 0 1.3-1 2.3-2.5 2.3H11v3.4H9z"
              fill="#1A1A1A"
            />
          </svg>
        </a>

        <nav className="header-nav" id="main-nav">
          <a href="#work">Portfolio</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#services">Pages</a>
        </nav>

        <div className="header-right">
          <button className="hire-me-btn" id="hire-me-btn">
            HIRE ME
          </button>
        </div>
      </div>
    </header>
  );
}
