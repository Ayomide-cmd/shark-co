import { useState } from "react";
import { navLinks } from "../data/content";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="nav__logo" href="#top">SHARK.CO</a>
      <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
        {navLinks.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
      </nav>
      <a className="btn btn--orange nav__cta" href="#join">Join the pack</a>
      <button className="nav__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  );
}
