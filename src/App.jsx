import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./views/Home.jsx";
import Services from "./views/Services.jsx";
import Contact from "./views/Contact.jsx";
import MagneticButton from "./components/MagneticButton.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Brand({ className = "" }) {
  return (
    <Link
      to="/"
      className={`flex items-baseline gap-0.5 font-extrabold tracking-wide text-white no-underline text-[1.22rem] ${className}`}
    >
      ELM<b className="text-accent">A</b>C
      <small className="ml-2 -translate-y-0.5 font-mono text-[0.52rem] font-medium uppercase tracking-[0.18em] text-steel-400">
        Cleaning&nbsp;Services
      </small>
    </Link>
  );
}

const navLink = ({ isActive }) =>
  `rounded-md px-3.5 py-2 text-[0.9rem] font-semibold tracking-[0.01em] transition-colors ${
    isActive
      ? "text-white after:mt-1 after:block after:h-0.5 after:rounded after:bg-accent"
      : "text-[#C9D0D6] hover:bg-white/5 hover:text-white"
  }`;

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
        <div className="wrap flex h-16 items-center gap-6">
          <Brand />
          <button
            className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ≡
          </button>
          <nav
            className={`${
              open
                ? "absolute left-0 right-0 top-16 flex flex-col gap-1 border-b border-white/10 bg-ink-2 p-3"
                : "hidden"
            } md:static md:ml-auto md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0`}
          >
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </nav>
          <MagneticButton
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[0.85rem] font-bold text-ink hover:bg-[#22c0cd]"
          >
            Book a compliance clean
          </MagneticButton>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="border-t border-white/10 bg-[#0B1116] py-9 text-[0.82rem] text-steel-400">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <Brand className="text-base" />
          <span>© {new Date().getFullYear()} Elmac Cleaning Services · Proudly South Australian, family owned.</span>
          <span className="font-mono tracking-[0.08em]">AS1851-2012 · PGE342023</span>
        </div>
      </footer>
    </div>
  );
}
