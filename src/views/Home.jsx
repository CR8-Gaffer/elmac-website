import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal.jsx";
import Stat from "../components/Stat.jsx";
import ReportPreview from "../components/ReportPreview.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const SLIDES = [
  {
    label: "Adelaide Crows — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_20%_0%,#2a3947_0%,#141d26_55%,#0b1117_100%)]",
  },
  {
    label: "Adelaide Oval — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_80%_10%,#26424a_0%,#132027_55%,#0b1117_100%)]",
  },
  {
    label: "Adelaide 36ers — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_50%_100%,#33303f_0%,#171b26_55%,#0b1117_100%)]",
  },
];

const PROBLEMS = [
  {
    t: "Fire risk & insurance exposure",
    b: "Grease-loaded ducts are the fire path insurers ask about first. Evidence of scheduled cleaning is what premium reviews and claims want to see.",
  },
  {
    t: "Council & audit pressure",
    b: "EHO inspections and audits increasingly demand records, not assurances. A certificate and photo report answer the question before it's asked.",
  },
  {
    t: "Operational disruption",
    b: "Cleans that collide with trade cost more than they save. We schedule around service periods, access windows and night works.",
  },
];

const SERVICES = [
  {
    t: "Kitchen Exhaust System Cleaning",
    b: "Canopies to cowls, cleaned and certificated to AS1851-2012.",
    tag: "AS1851-2012",
    to: "/services/kitchen-exhaust-cleaning",
    featured: true,
  },
  {
    t: "Grease Filter Exchange",
    b: "Scheduled swap-outs, cleaned at an SA Water approved facility.",
    tag: "Scheduled cycle",
    to: "/services",
  },
  {
    t: "Commercial Kitchen Deep Cleaning",
    b: "Equipment, surfaces and structure reset to standard.",
    tag: "Quote by inspection",
    to: "/services",
  },
  {
    t: "Pressure Washing",
    b: "Grease-affected hard surfaces, docks, bin areas and carparks.",
    tag: "To 4,500 PSI",
    to: "/services",
  },
  {
    t: "High Access & Facade Cleaning",
    b: "EWP, permits and access planning handled as part of the job.",
    tag: "Access planned",
    to: "/services",
  },
  {
    t: "KES Installation",
    b: "Design, manufacture and install under contractor licence.",
    tag: "PGE342023",
    to: "/services",
  },
  {
    t: "Scheduled Maintenance Programs",
    b: "Your whole year of compliance on one planner — every venue, every cycle.",
    tag: "Annual planner",
    to: "/contact",
    featured: true,
  },
];

const CYCLES = {
  heavy: {
    label: "Heavy grease load",
    hint: "Solid fuel · charcoal · wok cooking",
    kes: "Quarterly",
    filters: "2–4-weekly",
  },
  standard: {
    label: "Standard commercial",
    hint: "Most restaurant & pub kitchens",
    kes: "6-monthly",
    filters: "4-weekly",
  },
  light: {
    label: "Light use",
    hint: "Low-grease or limited-hours kitchens",
    kes: "Annual",
    filters: "4–8-weekly",
  },
};

const INDUSTRIES = [
  "Restaurants & cafés",
  "Hotels, pubs & clubs",
  "Shopping centres",
  "Food production",
  "Facility managers",
  "Property managers",
  "Multi-site groups",
];

const CASES = [
  {
    tag: "Shopping centre",
    t: "Common exhaust fan program, night works",
    b: "Centre-wide KEF cleaning coordinated around permits, inductions and after-hours access windows — documented per asset, defects flagged.",
  },
  {
    tag: "Hotel group",
    t: "Multi-venue annual planner",
    b: "A full financial year of KES, filter and deep-clean cycles across the group — one schedule, one contact, one report stream.",
  },
  {
    tag: "Investigation",
    t: "Grease leak diagnosis & remediation",
    b: "Traced grease migration between tenancies, remediated the source and documented the fix for the property manager.",
  },
];

export default function Home() {
  usePageMeta(
    "Elmac Cleaning Services — Commercial Kitchen Exhaust & Industrial Cleaning, SA & NT",
    "Scheduled kitchen exhaust cleaning to AS1851-2012, grease filter exchange, commercial deep cleaning, pressure washing and industrial cleaning programs — documented and certificated, across South Australia and the Northern Territory."
  );

  const [slide, setSlide] = useState(0);
  const [load, setLoad] = useState("standard");
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  const cycle = CYCLES[load];

  return (
    <>
      {/* ── 1 · HERO ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-20" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <div
              key={s.label}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${s.cls} ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="absolute bottom-3.5 right-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,22,28,0.94)_0%,rgba(16,22,28,0.7)_46%,rgba(16,22,28,0.28)_100%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(90deg,#000,transparent_80%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="wrap relative py-[clamp(56px,10vw,120px)]">
          <motion.span
            className="eyebrow eyebrow--accent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elmaculate Service &amp; Standards
          </motion.span>
          <motion.h1
            className="balance mt-4 max-w-[18ch] text-[clamp(2rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.02em]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Kitchen exhaust, industrial cleaning and <span className="text-accent">preventive maintenance</span> for
            commercial sites.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[52ch] text-[clamp(1rem,1.5vw,1.14rem)] text-[#C6CFD6]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Scheduled kitchen exhaust cleaning, grease filter exchange, commercial kitchen detailing, pressure washing
            and high-access cleaning programs — documented, certificated and built around your compliance obligations.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <MagneticButton
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#22c0cd]"
            >
              Request a commercial quote
            </MagneticButton>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
            >
              View services
            </Link>
          </motion.div>
          <motion.p
            className="mt-7 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#8f9aa3]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            Official Supply Partner &amp; Sponsor — Adelaide Crows · Adelaide 36ers · Adelaide Oval
          </motion.p>
        </div>

        <div className="absolute bottom-5 left-[clamp(20px,5vw,64px)] flex gap-2" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSlide(i)}
              className={`h-1 w-[26px] rounded-sm ${i === slide ? "bg-accent" : "bg-white/[0.22]"}`}
            />
          ))}
        </div>
      </section>

      {/* ── 2 · CREDIBILITY BAR ──────────────────────────────── */}
      <section className="border-b border-steel-200 bg-white">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 md:justify-between">
          {["30+ years", "SA family owned", "SA & NT coverage", "AS1851-2012", "PGE342023"].map((c) => (
            <span key={c} className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-steel-600">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3 · THE PROBLEM ──────────────────────────────────── */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why it matters</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Grease is a fire path, an insurance question and a council finding.
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <h3 className="text-[1.05rem] font-extrabold">{p.t}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-steel-600">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · CORE SERVICES ────────────────────────────────── */}
      <section className="border-y border-steel-200 bg-white py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Capability</span>
              <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                One partner across the whole maintenance cycle.
              </h2>
            </div>
            <Link to="/services" className="font-semibold text-accent-deep no-underline hover:underline">
              All services →
            </Link>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 0.06}>
                <Link
                  to={s.to}
                  className={`group flex h-full flex-col rounded-xl border p-6 no-underline transition-colors ${
                    s.featured
                      ? "border-accent/[0.35] bg-accent/[0.06] hover:border-accent"
                      : "border-steel-200 bg-paper hover:border-accent/60"
                  }`}
                >
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-[1.08rem] font-extrabold leading-snug text-ink">{s.t}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{s.b}</p>
                  <span className="mt-4 text-[0.85rem] font-bold text-accent-deep group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 · EVIDENCE / REPORTING ─────────────────────────── */}
      <section className="bg-ink py-[clamp(56px,9vw,110px)] text-white">
        <div className="wrap grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Compliance &amp; reporting</span>
            <h2 className="balance mt-3.5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Every clean leaves evidence.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[#AEB8C0]">
              Before/after photo reporting, compliance certificates, defect notes and next-cycle recommendations with
              every service — the documentation your insurer, council and landlord actually ask for.
            </p>
            <div className="mt-7">
              <MagneticButton
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-bold text-ink hover:bg-[#22c0cd]"
              >
                See what our reporting looks like →
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ReportPreview />
            <p className="mt-3 text-center font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/45">
              Representative sample — the format issued after every compliance clean
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · CYCLE EXPLAINER ──────────────────────────────── */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="eyebrow">Preventive maintenance</span>
            <h2 className="balance mt-3.5 text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Cleaning isn't an event. It's a cycle.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[1.02rem] text-steel-600">
              Filters on a short cycle, exhaust systems on a risk-based cycle, deep cleans as required and an annual
              review across the lot. Pick your kitchen's cooking load to see a typical starting point.
            </p>
            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-steel-400">
              Your insurer or landlord may specify shorter cycles — we schedule to the strictest applicable
              requirement.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-steel-200 bg-white p-6">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Cooking load">
                {Object.entries(CYCLES).map(([k, c]) => (
                  <button
                    key={k}
                    onClick={() => setLoad(k)}
                    className={`rounded-lg border px-3.5 py-2 text-[0.85rem] font-bold transition-colors ${
                      load === k
                        ? "border-accent bg-accent/10 text-accent-deep"
                        : "border-steel-200 text-steel-600 hover:border-steel-400"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-400">{cycle.hint}</p>
              <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-steel-200 bg-steel-200 sm:grid-cols-2">
                <div className="bg-paper px-5 py-4">
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">
                    KES clean — typical
                  </div>
                  <div className="mt-1 text-[1.35rem] font-extrabold text-ink">{cycle.kes}</div>
                </div>
                <div className="bg-paper px-5 py-4">
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-steel-400">
                    Filter exchange
                  </div>
                  <div className="mt-1 text-[1.35rem] font-extrabold text-ink">{cycle.filters}</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-block text-[0.9rem] font-bold text-accent-deep no-underline hover:underline"
              >
                Where does your site sit? Request an inspection →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · WHO WE ARE ───────────────────────────────────── */}
      <section className="border-y border-steel-200 bg-white py-[clamp(56px,9vw,110px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,72px)] md:grid-cols-[0.85fr_1.4fr]">
          <Reveal className="md:sticky md:top-24">
            <span className="eyebrow mb-4 block">Who we are</span>
            <h2 className="balance text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              The home of <em className="not-italic text-accent-deep">Elmaculate</em> service and standards.
            </h2>
            <div className="my-6 h-px bg-steel-200" />
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 lg:grid-cols-4">
              <Stat value={30} suffix="+" label="Years" />
              <Stat value="AS1851" label="-2012" />
              <Stat value="SA·NT" label="Coverage" />
              <Stat value="PGE" label="342023" />
            </div>
          </Reveal>
          <div className="max-w-[62ch] text-[clamp(1.02rem,1.35vw,1.16rem)] text-[#2C353D]">
            <Reveal>
              <p>
                Welcome to Elmac — the home of Elmaculate service and standards. Elmac Cleaning Services is an industry
                leader in all professional commercial and industrial cleaning requirements for kitchens, kitchen
                exhausts and associated extraction and closed duct systems requiring full compliance certification and
                the highest standard of cleaning and maintenance.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5">
                We are proud to be associated with most of South Australia and the Northern Territory's leading
                commercial and industrial kitchens, where cleaning behind the scene is as transparent and important as
                the experience our clients provide their customers.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5">
                A proudly South Australian family-owned business with over{" "}
                <strong className="font-bold text-ink">30+ years' experience</strong> in the nature and need of
                commercial and industrial cleaning requirements — especially the strict Australian Standards followed
                by all commercial kitchens per <strong className="font-bold text-ink">AS1851-2012</strong>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8 · INDUSTRIES ───────────────────────────────────── */}
      <section className="py-[clamp(44px,6vw,72px)]">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow">Industries</span>
            <h2 className="balance mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              Built for high-use commercial environments.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 flex flex-wrap justify-center gap-2.5">
            {INDUSTRIES.map((n) => (
              <span
                key={n}
                className="rounded-full border border-steel-200 bg-white px-4 py-2 text-[0.88rem] font-semibold text-steel-700"
              >
                {n}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 9 · MULTI-SITE BAND ──────────────────────────────── */}
      <section className="bg-ink-2 py-[clamp(44px,6vw,72px)] text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold tracking-[-0.02em]">
              Managing multiple venues?
            </h2>
            <p className="mt-2 max-w-[52ch] text-[#AEB8C0]">
              One contact, one schedule, consolidated reporting — venue-by-venue service cycles on a single annual
              planner.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <MagneticButton
              to="/contact?type=multi-site"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink hover:bg-[#22c0cd]"
            >
              Discuss a multi-site program
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · RECENT WORK ─────────────────────────────────── */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Recent work</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Complex sites are the day job.
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6">
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                    {c.tag}
                  </span>
                  <h3 className="mt-3 text-[1.05rem] font-extrabold leading-snug">{c.t}</h3>
                  <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-400">
            Anonymised — named case studies to follow with client permission.
          </p>
        </div>
      </section>

      {/* ── 11 · FINAL CTA ───────────────────────────────────── */}
      <section className="bg-ink py-[clamp(56px,9vw,100px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[24ch] text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Ready to put your site on a compliant cycle?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Tell us about the site — we'll come and look, quote it properly, and schedule around your trade.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#22c0cd]"
            >
              Request a commercial quote
            </MagneticButton>
            <a
              href="tel:1800435622"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
            >
              1800 4 ELMAC
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
