import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import SideRail from "../components/SideRail.jsx";
import Doctrine from "../components/Doctrine.jsx";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

const SERVICES = [
  {
    num: "SVC.01",
    title: "Kitchen Canopy, Exhaust, Extraction & Deep Cleaning",
    body: "The full system, not just the canopy: exhaust fans, discharge cowls, duct plenums, linkup ductwork and risers, deep cleaned and detailed to AS1851-2012 — with photo reporting on every associated area, because the sections you can't see carry the heaviest fire load.",
    tags: ["AS1851-2012", "Photo reporting", "Canopies · Fans · Ducts", "Compliance certificate"],
    after: "svc-canopy.jpg",
    before: "doc-before-canopy.jpg",
    ba: true,
    link: "/services/kitchen-exhaust-cleaning",
  },
  {
    num: "SVC.02",
    title: "Grease Filter Clean & Exchange Service",
    body: "Filters carry the first and heaviest grease load in the kitchen. Swap-out exchange on a scheduled cycle — clean filters in, loaded filters out, metro and outer-metro collection and delivery — with cleaning at an SA Water approved facility using deep-soak, hot-wash and rinse practice. Honeycomb, stainless baffle and electrostatic, all sizes and designs.",
    tags: ["SA Water approved", "Deep soak · Hot wash", "Honeycomb · Baffle · Electrostatic", "Collection & delivery"],
    after: "svc-filters.jpg",
    before: "doc-before-filters.jpg",
    ba: true,
    link: "/services/grease-filter-exchange",
  },
  {
    num: "SVC.03",
    title: "Pizza Oven & Equipment Deep Cleaning",
    body: "Pizza ovens and cooking equipment torn down, deep cleaned, rebuilt and polished — then photographed, because a rebuild you can't verify is a rumour. We run pizza-oven programs for national franchise kitchens across SA & NT.",
    tags: ["Teardown · Rebuild · Polish", "National franchise programs · SA & NT"],
    after: "svc-pizza-oven.jpg",
    before: "doc-before-pizza.jpg",
    ba: true,
    link: "/services/commercial-kitchen-deep-cleaning",
  },
  {
    num: "SVC.04",
    title: "Hot & Cold Pressure Washing",
    body: "Trailer-mounted hot-wash to 4,500 PSI for the surfaces that carry a site's grease and grime: bin rooms, docks, back-of-house concrete, carparks, buildings, roofs and solar. Runoff is planned before the trigger gets pulled — not explained after.",
    tags: ["Up to 4,500 PSI", "Trailer-mounted hot wash", "Buildings · Carparks · Roofs · Solar"],
    after: "svc-pressure.jpg",
    before: "doc-before-pressure.jpg",
    ba: true,
    link: "/services/pressure-washing",
  },
  {
    num: "SVC.05",
    title: "High Access, Windows & Commercial Cleaning",
    body: "Commercial cleaning where the access or the standard is the hard part: high-access windows and louvres, and builders' post-construction handover cleans. Scoped at inspection, quoted fixed — and anything outside scope gets named in writing, not absorbed and skimped.",
    tags: ["High-access windows & louvres", "Post-construction handover"],
    after: "svc-commercial.jpg",
    before: "doc-before-commercial.jpg",
    ba: true,
    link: "/services/high-access-facade-cleaning",
  },
  {
    num: "SVC.06",
    title: "Kitchen Exhaust & Extraction Installation",
    body: "Licensed plumbing, gas and electrical contractor (PGE342023). Design, manufacture and installation of kitchen exhaust and extraction systems, scoped and completed with reference to relevant Australian Standards, including AS 1668.2 where applicable.",
    tags: ["Custom design & manufacture", "Air-flow engineering", "AS 1668.2 · PGE342023"],
    after: "svc-install.jpg",
    ba: false,
    link: "/services/kes-installation",
  },
  {
    num: "SVC.07",
    title: "Scheduled Maintenance Programs",
    body: "Your whole year of compliance on one planner — every venue, every cycle. More than 500 recurring obligations already run this way, each with its service history on file.",
    tags: ["One FY planner", "Every venue · Every cycle", "Consolidated reporting"],
    after: "doc-depot-dawn.jpg",
    ba: false,
    link: "/services/scheduled-maintenance-programs",
  },
];

const svcId = (num) => num.replace(".", "").toLowerCase();
const RAIL = SERVICES.map((s) => ({ id: svcId(s.num), label: s.num }));

function Media({ svc }) {
  if (svc.ba) {
    return (
      <BeforeAfter
        after={A(svc.after)}
        before={svc.before ? A(svc.before) : undefined}
        note="Concept imagery — real job before/after photos to follow"
      />
    );
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-steel-200 shadow-[0_20px_40px_-28px_rgba(14,37,73,0.5)]">
      <img src={A(svc.after)} alt={svc.title} className="h-full w-full object-cover" loading="lazy" />
      <span className="absolute left-3 top-3 rounded-md bg-accent/85 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#0A2A44]">
        Service
      </span>
    </div>
  );
}

export default function Services() {
  usePageMeta(
    "Commercial Cleaning Services Adelaide | Elmac Cleaning Services",
    "Kitchen exhaust cleaning to AS1851-2012, grease filter exchange, pizza oven cleaning, pressure washing, KES installation and commercial deep cleaning — scheduled, documented and certificated across SA & NT."
  );

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Service capability</span>
          <h1 className="balance mt-3.5 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            Every system, maintained to standard — and documented.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Most sites don't have a cleaning problem — they have a coordination problem: several systems, several
            cycles, usually several contractors. Everything below runs on one schedule, documented with photos and
            closed out with a recommendation for the next cycle. Drag the slider on any service to see the finish.
          </p>
          <Doctrine n={6} />
        </Reveal>
      </section>

      <SideRail items={RAIL} />

      <section className="wrap flex flex-col gap-[clamp(26px,4vw,46px)] pb-[clamp(60px,8vw,110px)] pt-9">
        {SERVICES.map((svc, i) => (
          <Reveal key={svc.num}>
            <article id={svcId(svc.num)} className="scroll-mt-24 grid items-center gap-[clamp(24px,4vw,56px)] md:grid-cols-2">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="font-mono text-[0.74rem] font-semibold tracking-[0.14em] text-accent-deep">
                  {svc.num}
                </span>
                <h3 className="balance mt-3 text-[clamp(1.35rem,2.4vw,1.85rem)] font-extrabold leading-[1.12] tracking-[-0.015em]">
                  {svc.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[1.05rem] text-[#333C44]">{svc.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.tags.map((t, x) => (
                    <span
                      key={t}
                      className={`rounded-full border px-2.5 py-1.5 font-mono text-[0.68rem] tracking-[0.05em] ${
                        x === 0
                          ? "border-accent/40 bg-accent/10 text-accent-deep"
                          : "border-steel-200 bg-white text-steel-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {svc.link && (
                  <Link
                    to={svc.link}
                    className="mt-5 inline-block font-bold text-accent-deep no-underline hover:underline"
                  >
                    Full service detail →
                  </Link>
                )}
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <Media svc={svc} />
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-steel-200 bg-white py-[clamp(44px,6vw,72px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Further capability</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              The same discipline, applied wider.
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Window & louvre cleaning", "Ground level to EWP-coordinated high access.", "/services/window-cleaning"],
              ["Industrial cleaning", "Production sites, high-level structures, shutdown windows.", "/services/industrial-cleaning"],
              ["Soft washing", "Low-pressure chemistry for surfaces pressure would damage.", "/services/soft-washing"],
              ["Heated soak tanks", "Pots, filters and racks stripped overnight on site — not scrubbed by your staff. Supplied, serviced and restocked by Elmac.", "/services/heated-soak-tanks"],
            ].map(([t, b, to]) => (
              <Reveal key={to}>
                <Link
                  to={to}
                  className="group flex h-full flex-col rounded-xl border border-steel-200 bg-paper p-5 no-underline transition-colors hover:border-accent/60"
                >
                  <h3 className="text-[1rem] font-extrabold text-ink">{t}</h3>
                  <p className="mt-1.5 flex-1 text-[0.88rem] leading-relaxed text-steel-600">{b}</p>
                  <span className="mt-3 text-[0.84rem] font-bold text-accent-deep group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 py-[clamp(44px,6vw,72px)]">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance max-w-[28ch] text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              Every service above can run on a single annual planner.
            </h2>
            <p className="mt-2 max-w-[54ch] text-steel-600">
              Filters, KES cleans, deep cleans and reviews — one schedule, one contact, consolidated reporting.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/services/scheduled-maintenance-programs"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink no-underline transition-colors hover:bg-[#57bce8]"
            >
              See how the program works
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
