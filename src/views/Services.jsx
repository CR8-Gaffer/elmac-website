import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

const SERVICES = [
  {
    num: "SVC.01",
    title: "Kitchen Canopy, Exhaust, Extraction & Deep Cleaning",
    body: "Professional deep clean and detail of all kitchen exhaust and extraction systems, including full photo reporting of all associated areas — including but not limited to canopies, exhaust fans, discharge cowls, duct plenums, linkup ductwork, and risers specific to AS1851-2012.",
    tags: ["AS1851-2012", "Photo reporting", "Canopies · Fans · Ducts", "Compliance certificate"],
    after: "svc-canopy.jpg",
    ba: true,
    link: "/services/kitchen-exhaust-cleaning",
  },
  {
    num: "SVC.02",
    title: "Grease Filter Clean & Exchange Service",
    body: "Metro and outer-metro collection and delivery of all size and design extraction-system grease filters, with all cleaning undertaken at a fully SA Water approved facility utilising deep-soak, hot-wash and rinse practice. All honeycomb, stainless baffle and electrostatic filters inclusive.",
    tags: ["SA Water approved", "Deep soak · Hot wash", "Honeycomb · Baffle · Electrostatic", "Collection & delivery"],
    after: "svc-filters.jpg",
    ba: true,
  },
  {
    num: "SVC.03",
    title: "Pizza Oven & Equipment Deep Cleaning",
    body: "Professionally trained technicians covering all aspects of pizza oven and cooking-equipment teardown, deep clean, rebuild and polish to the highest of standards. Main pizza-oven cleaning contractor to Domino's and Pizza Hut in SA & NT.",
    tags: ["Teardown · Rebuild · Polish", "Domino's & Pizza Hut SA·NT"],
    after: "svc-pizza-oven.jpg",
    ba: true,
  },
  {
    num: "SVC.04",
    title: "Hot & Cold Pressure Washing",
    body: "Highly capable large-scale-area and high-restriction pressure washing services utilising trailer-mounted hot-wash systems capable of up to 4,500 PSI. This service can include full building, carpark, roof and solar-panel cleaning services in addition to routine cleaning requirements.",
    tags: ["Up to 4,500 PSI", "Trailer-mounted hot wash", "Buildings · Carparks · Roofs · Solar"],
    after: "svc-pressure.jpg",
    ba: true,
  },
  {
    num: "SVC.05",
    title: "Kitchen Exhaust & Extraction Installation",
    body: "Full-scope, inception-to-completion installation of all kitchen exhaust and extraction systems — inclusive of custom design, manufacture and air-flow analysis engineering. Fully accredited with Plumbing, Gas and Electrical contractor licensing (PGE342023) for confidence in conformance required by AS1668 & AS1668.2.",
    tags: ["Custom design & manufacture", "Air-flow engineering", "PGE342023", "AS1668 & AS1668.2"],
    after: "svc-install.jpg",
    ba: false,
  },
  {
    num: "SVC.06",
    title: "Commercial Cleaning & Kitchen Deep Clean / Detail",
    body: "Extensive commercial cleaning services such as high-access window and louvre cleaning, wet-vac carpet cleaning, full kitchen deep clean and detail requirements, and builders' post-construction presentation and handover cleaning. No cleaning service outside of scope or capability.",
    tags: ["High-access windows & louvres", "Wet-vac carpet", "Post-construction handover"],
    after: "svc-commercial.jpg",
    ba: true,
  },
];

function Media({ svc }) {
  if (svc.ba) {
    return (
      <BeforeAfter
        after={A(svc.after)}
        note="Concept imagery — real job before/after photos to follow"
      />
    );
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-steel-200 shadow-[0_20px_40px_-28px_rgba(16,22,28,0.5)]">
      <img src={A(svc.after)} alt={svc.title} className="h-full w-full object-cover" loading="lazy" />
      <span className="absolute left-3 top-3 rounded-md bg-accent/85 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#04252a]">
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
          <span className="eyebrow">Professional cleaning services</span>
          <h1 className="balance mt-3.5 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            Every system, cleaned to standard — and documented.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            One partner across the whole maintenance cycle — every service delivered on a schedule, documented with
            photos, and closed out with recommendations for the next cycle. Drag the slider on any service to reveal
            the finish.
          </p>
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-[clamp(26px,4vw,46px)] pb-[clamp(60px,8vw,110px)] pt-9">
        {SERVICES.map((svc, i) => (
          <Reveal key={svc.num}>
            <article className="grid items-center gap-[clamp(24px,4vw,56px)] md:grid-cols-2">
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
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink no-underline transition-colors hover:bg-[#22c0cd]"
            >
              Discuss a scheduled maintenance program
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
