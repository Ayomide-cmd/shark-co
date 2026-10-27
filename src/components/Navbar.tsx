import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSectionLink(section: string) {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <header className="nav">
      <Link
        className="nav__logo"
        to="/"
        onClick={() => setOpen(false)}
      >
        SHARK.CO
      </Link>

      <nav
        className={`nav__links ${open ? "is-open" : ""}`}
        aria-label="Primary"
      >
        {navLinks.map((link) => {
          const section = link.toLowerCase();

          if (section === "shop") {
            return (
              <Link
                key={link}
                to="/shop"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            );
          }

          return (
            <a
              key={link}
              href={`/#${section}`}
              onClick={(event) => {
                event.preventDefault();
                handleSectionLink(section);
              }}
            >
              {link}
            </a>
          );
        })}
      </nav>

      <a
        className="btn btn--orange nav__cta"
        href="/#join"
        onClick={(event) => {
          event.preventDefault();
          handleSectionLink("join");
        }}
      >
        Join the pack
      </a>

      <button
        className="nav__burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i />
        <i />
      </button>
    </header>
  );
}
