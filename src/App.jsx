import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./views/Home.jsx";
import Services from "./views/Services.jsx";
import KitchenExhaust from "./views/KitchenExhaust.jsx";
import ServiceDetail from "./views/ServiceDetail.jsx";
import Industries from "./views/Industries.jsx";
import IndustryDetail from "./views/IndustryDetail.jsx";
import Projects from "./views/Projects.jsx";
import FieldNotes from "./views/FieldNotes.jsx";
import FieldNoteDetail from "./views/FieldNoteDetail.jsx";
import HowWeWork from "./views/HowWeWork.jsx";
import ComplianceReporting from "./views/ComplianceReporting.jsx";
import Contact from "./views/Contact.jsx";
import MagneticButton from "./components/MagneticButton.jsx";
import StickyCta from "./components/StickyCta.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Brand({ className = "" }) {
  // The real mark — reversed variant generated from the original artwork
  // (navy → white) for dark surfaces.
  return (
    <Link to="/" className={`inline-flex items-center no-underline ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}assets/elmac-logo-reverse.png`}
        alt="Elmac Cleaning Services"
        className="h-11 w-auto md:h-14"
      />
    </Link>
  );
}

const navLink = ({ isActive }) =>
  `rounded-md px-2.5 py-2 text-[0.86rem] font-semibold tracking-[0.01em] transition-colors ${
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
        <div className="wrap flex h-[76px] items-center gap-5">
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
                ? "absolute left-0 right-0 top-[76px] flex flex-col gap-1 border-b border-white/10 bg-ink-2 p-3"
                : "hidden"
            } md:static md:ml-auto md:flex md:flex-row md:gap-0.5 md:border-0 md:bg-transparent md:p-0`}
          >
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
            <NavLink to="/industries" className={navLink}>
              Industries
            </NavLink>
            <NavLink to="/compliance-reporting" className={navLink}>
              Compliance
            </NavLink>
            <NavLink to="/projects" className={navLink}>
              Projects
            </NavLink>
            <NavLink to="/field-notes" className={navLink}>
              Field Notes
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
            <a
              href="tel:1800435622"
              className="rounded-md px-2.5 py-2 text-[0.86rem] font-semibold tracking-[0.01em] text-[#C9D0D6] no-underline hover:bg-white/5 hover:text-white md:hidden"
            >
              1800 435 622
            </a>
            <Link
              to="/contact"
              className="mt-1 rounded-lg bg-accent px-4 py-2.5 text-center text-[0.85rem] font-bold text-ink no-underline md:hidden"
            >
              Request a quote or inspection
            </Link>
          </nav>
          <a
            href="tel:1800435622"
            className="hidden whitespace-nowrap text-[0.85rem] font-bold text-white no-underline hover:text-accent xl:inline-flex xl:items-center"
          >
            1800 435 622
          </a>
          <MagneticButton
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[0.85rem] font-bold text-ink hover:bg-[#57bce8]"
          >
            Request a quote or inspection
          </MagneticButton>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/kitchen-exhaust-cleaning" element={<KitchenExhaust />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/field-notes" element={<FieldNotes />} />
          <Route path="/field-notes/:slug" element={<FieldNoteDetail />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/compliance-reporting" element={<ComplianceReporting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <StickyCta />

      <footer className="border-t border-white/10 bg-ink-3 pb-8 pt-10 text-[0.84rem] text-steel-400">
        <div className="wrap grid gap-8 md:grid-cols-[1.2fr_0.9fr_1fr]">
          <div>
            <Brand className="text-base" />
            <p className="mt-3.5 max-w-[40ch] leading-relaxed">
              Industrial asset maintenance and compliance — kitchen exhaust, extraction and industrial programs,
              scheduled, documented and certificated across Adelaide, regional South Australia and the Northern
              Territory.
            </p>
            <p className="mt-3.5 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.12em] text-steel-600">
              Official Supply Partner &amp; Sponsor — Adelaide Crows · Adelaide 36ers · Adelaide Oval
            </p>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-600">Explore</div>
            <div className="mt-3 grid gap-2">
              {[
                ["Services", "/services"],
                ["Kitchen exhaust cleaning", "/services/kitchen-exhaust-cleaning"],
                ["Scheduled maintenance programs", "/services/scheduled-maintenance-programs"],
                ["Industries", "/industries"],
                ["Compliance & reporting", "/compliance-reporting"],
                ["Projects", "/projects"],
                ["Field notes", "/field-notes"],
                ["How a job actually runs", "/how-we-work"],
                ["Request a quote", "/contact"],
              ].map(([t, to]) => (
                <Link key={to} to={to} className="text-[#B9C2CA] no-underline hover:text-accent">
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-600">Contact</div>
            <div className="mt-3 grid gap-2">
              <a href="tel:1800435622" className="text-[#B9C2CA] no-underline hover:text-accent">
                1800 4 ELMAC
              </a>
              <a href="mailto:operations@elmac.au" className="text-[#B9C2CA] no-underline hover:text-accent">
                operations@elmac.au
              </a>
              <span>30 Chapman Road, Hackham SA 5163</span>
            </div>
          </div>
        </div>
        <div className="wrap mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-6">
          <span>© {new Date().getFullYear()} Elmac Cleaning Services · Proudly South Australian, family owned.</span>
          <span className="font-mono tracking-[0.08em]">PGE342023 (licence) · AS1851-2012 · AS 1668.2</span>
        </div>
      </footer>
    </div>
  );
}
