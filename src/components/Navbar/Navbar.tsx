import { useEffect, useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const sectionIds = siteConfig.nav.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const activeId = useScrollSpy(sectionIds);

  // Toggle hamburger menu
  const handleHamburgerButtonToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  // Navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when clicking a navigation link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          Navbar
      ========================== */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <nav className="navbar__inner container" aria-label="Primary">
          {/* Brand */}
          <a href="#about" className="navbar__brand mono">
            <span className="navbar_user_name">{siteConfig.name}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar__links">
            {siteConfig.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? "is-active" : ""}
                  aria-current={activeId === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            {/* Theme Toggle */}
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              aria-pressed={theme === "light"}
            >
              {theme === "dark" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M13.5 9.3A5.8 5.8 0 1 1 6.7 2.5a4.6 4.6 0 0 0 6.8 6.8Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />

                  <path
                    d="M8 1.5v1.4M8 13.1v1.4M14.5 8h-1.4M2.9 8H1.5M12.5 3.5l-1 1M4.5 11.5l-1 1M12.5 12.5l-1-1M4.5 4.5l-1-1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              className={`hamburger ${menuOpen ? "is-open" : ""}`}
              onClick={handleHamburgerButtonToggle}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
      >
        <ul>
          {siteConfig.nav.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <li
                key={item.id}
                style={{
                  transitionDelay: `${index * 35}ms`,
                }}
              >
                <a
                  href={`#${item.id}`}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleNavClick}
                >
                  <span className="mono mobile-nav__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
