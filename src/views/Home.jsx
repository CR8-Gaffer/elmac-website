import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal.jsx";
import Stat from "../components/Stat.jsx";
import ReportPreview from "../components/ReportPreview.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import InspectionTag from "../components/InspectionTag.jsx";
import DimensionDivider from "../components/DimensionDivider.jsx";
import CycleGraphic from "../components/CycleGraphic.jsx";
import MarginNote from "../components/MarginNote.jsx";
import usePageMeta from "../lib/usePageMeta.js";

// Ledger numeral that counts up once when scrolled into view.
function LedgerNum({ v, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? v : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, v, { duration: 1.1, ease: "easeOut", onUpdate: (x) => setN(Math.round(x)) });
    return () => c.stop();
  }, [inView, reduce, v]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const HERO_IMG = `${import.meta.env.BASE_URL}assets/doc-hero-night.jpg`;

// Night-rooftop documentary base under per-slide tints; labels hold the
// partnership slots until approved photography arrives.
const SLIDES = [
  {
    label: "Adelaide Crows — partnership photo to follow",
    grad: "radial-gradient(120% 120% at 20% 0%, rgba(42,57,71,0.55) 0%, rgba(20,29,38,0.62) 55%, rgba(11,17,23,0.78) 100%)",
  },
  {
    label: "Adelaide Oval — partnership photo to follow",
    grad: "radial-gradient(120% 120% at 80% 10%, rgba(38,66,74,0.5) 0%, rgba(19,32,39,0.6) 55%, rgba(11,17,23,0.78) 100%)",
  },
  {
    label: "Adelaide 36ers — partnership photo to follow",
    grad: "radial-gradient(120% 120% at 50% 100%, rgba(51,48,63,0.5) 0%, rgba(23,27,38,0.6) 55%, rgba(11,17,23,0.78) 100%)",
  },
];

const STANDARDS = [
  [
    "We don't leave hidden grease because \"it's probably fine.\"",
    "If we can't reach a section, we document it, photograph it, and tell you what it takes to make it reachable.",
  ],
  [
    "We flag what's outside our scope instead of ignoring it.",
    "A cracked flange isn't ours to fix — but it's absolutely ours to tell you about.",
  ],
  [
    "We document everything.",
    "If it isn't photographed and written down, it didn't happen. Every service closes with its evidence.",
  ],
  [
    "We communicate early.",
    "A rescheduled service with notice beats a surprise every time. You'll never chase us for bad news.",
  ],
  [
    "We leave sites operational.",
    "Kitchens open on time. Centres trade on time. No excuses attached to our invoice.",
  ],
  [
    "We build for the tenth year, not the first invoice.",
    "Most of our clients know their technicians by name — that's not an accident, it's the model.",
  ],
];

const INVISIBLE = [
  ["Scheduling", "planned around your trade, not ours"],
  ["Risk assessment", "SWMS written for your site, not recycled"],
  ["Permits & inductions", "cleared before the day, not on it"],
  ["Equipment & chemistry", "loaded for the system we inspected"],
  ["Access & weather", "EWP, roof keys, wind calls — decided early"],
  ["Isolation & protection", "the kitchen sheeted before a tool comes out"],
  ["Quality walk-through", "checked against scope before we leave"],
  ["Documentation", "report and certificate compiled same-cycle"],
];

const SERVICES = [
  {
    t: "Kitchen Exhaust System Cleaning",
    b: "Canopies to cowls, cleaned and certificated to AS1851-2012.",
    tag: "AS1851-2012",
    to: "/services/kitchen-exhaust-cleaning",
    featured: true,
    note: "Scope: canopy → filters → plenum → duct → riser → fan → cowl",
  },
  {
    t: "Grease Filter Exchange",
    b: "Scheduled swap-outs, cleaned at an SA Water approved facility.",
    tag: "Scheduled cycle",
    to: "/services/grease-filter-exchange",
    note: "Swap-out stock — the kitchen never waits on drying filters",
  },
  {
    t: "Commercial Kitchen Deep Cleaning",
    b: "Equipment, surfaces and structure reset to standard.",
    tag: "Quote by inspection",
    to: "/services/commercial-kitchen-deep-cleaning",
  },
  {
    t: "Pressure Washing",
    b: "Grease-affected hard surfaces, docks, bin areas and carparks.",
    tag: "To 4,500 PSI",
    to: "/services/pressure-washing",
  },
  {
    t: "High Access & Facade Cleaning",
    b: "EWP, permits and access planning handled as part of the job.",
    tag: "Access planned",
    to: "/services/high-access-facade-cleaning",
  },
  {
    t: "KES Installation",
    b: "Design, manufacture and install under contractor licence.",
    tag: "PGE342023",
    to: "/services/kes-installation",
  },
  {
    t: "Scheduled Maintenance Programs",
    b: "Your whole year of compliance on one planner — every venue, every cycle.",
    tag: "Annual planner",
    to: "/services/scheduled-maintenance-programs",
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
  ["Restaurants & cafés", "/industries/restaurants-cafes"],
  ["Hotels, pubs & clubs", "/industries/hotels-pubs-clubs"],
  ["Shopping centres", "/industries/shopping-centres"],
  ["Food production", "/industries/food-production"],
  ["Facility managers", "/industries/facility-property-managers"],
  ["Property managers", "/industries/facility-property-managers"],
  ["Multi-site groups", "/industries/multi-site-groups"],
  ["Government & institutional", "/industries/government-institutional"],
];

const STORIES = [
  {
    stamp: "2:47 AM · centre rooftop",
    t: "The night window",
    b: "Permits cleared by ten. Roof keys signed at midnight. Fourteen common exhaust fans opened, degreased, photographed and closed before the first delivery truck backs in. The deadline isn't sunrise — it's the moment the centre wakes up and never knows we were there.",
    pattern: "night works · permits · per-asset records",
  },
  {
    stamp: "Day 3 of 4 · 1,400 km in",
    t: "The long run",
    b: "Remote kitchens can't get local service, so we bring the service to them — a planned circuit, days long, filters and full system cleans and certificates delivered in one sweep. The paperwork lands before the crew is home.",
    pattern: "remote programs · SA & NT · one sweep",
  },
  {
    stamp: "3:50 PM · live kitchen",
    t: "Between lunch and dinner",
    b: "Prep tables sheeted at half past two. Canopy and filters done in the dead window between services. Gone by 4:15, benches wiped, chef never breaks stride. Working around a trading kitchen isn't a favour — it's the baseline skill.",
    pattern: "live sites · trade-aware · zero disruption",
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
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `${s.grad}, url(${HERO_IMG})` }}
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
            className="display-wide balance mt-4 max-w-[18ch] text-[clamp(2rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.02em]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            We protect assets, reduce fire risk and keep commercial sites{" "}
            <span className="text-accent">compliant</span>.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[54ch] text-[clamp(1rem,1.5vw,1.14rem)] text-[#C6CFD6]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Industrial asset maintenance delivered through specialist programs — kitchen exhaust cleaning, grease
            filter exchange, pressure washing, high-access work and scheduled preventive maintenance — documented,
            certificated and built around your compliance obligations.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <MagneticButton
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
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

        <div className="absolute bottom-5 left-[clamp(20px,5vw,64px)] flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-label={`Show slide ${i + 1}: ${s.label}`}
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

      {/* ── 2b · POSITIONING MANIFESTO ───────────────────────── */}
      <section className="blueprint py-[clamp(52px,8vw,96px)]">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">How Elmac thinks</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              "When we inspect an exhaust system, we aren't looking for grease to remove. We're looking for the
              problems that get <span className="text-accent-deep">expensive six months from now</span>."
            </h2>
            <p className="mt-4 max-w-[52ch] text-[1.02rem] text-steel-600">
              That's the difference between a cleaning contractor and a maintenance partner. Elmac is the second one —
              not a cleaning company, but an industrial asset maintenance and compliance contractor. Cleaning is just
              one of our methods. These are the outcomes:
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {[
                "We reduce risk",
                "We protect assets",
                "We maintain infrastructure",
                "We extend equipment life",
                "We improve compliance",
                "We solve operational problems",
              ].map((t, i) => (
                <div key={t} className="flex items-center gap-3.5 bg-white px-5 py-3.5">
                  <span className="font-mono text-[0.68rem] font-bold text-steel-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.98rem] font-bold text-ink">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · THE ELMACULATE STANDARD ──────────────────────── */}
      <section className="border-t border-steel-200 bg-white py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The Elmaculate Standard</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Standards we hold whether anyone is checking or not.
            </h2>
            <p className="mt-4 max-w-[56ch] text-[1rem] text-steel-600">
              None of these were written for this website. They're how the company already operates — you'll find
              every one of them evidenced in our reports.
            </p>
            <MarginNote className="mt-5">
              What clients don't always see: most of these standards cost us money in the short term. That's rather
              the point.
            </MarginNote>
            <DimensionDivider label="operating standards · STD.01–06" className="mt-8" />
          </Reveal>
          <div className="mt-2 grid gap-x-[clamp(32px,5vw,72px)] md:grid-cols-2">
            {STANDARDS.map(([lead, rest], i) => (
              <Reveal key={lead} delay={(i % 2) * 0.05} className="h-full">
                <div className="h-full border-b border-steel-200 py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                      STD.{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-[1.02rem] leading-relaxed text-steel-700">
                      <strong className="font-extrabold text-ink">{lead}</strong> {rest}
                    </p>
                  </div>
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
                  {s.note && (
                    <span className="mt-3 hidden font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.1em] text-steel-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                      {s.note}
                    </span>
                  )}
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
              Every service leaves evidence.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[#AEB8C0]">
              Before/after photo reporting, compliance certificates, defect notes and next-cycle recommendations with
              every service — the documentation your insurer, council and landlord actually ask for.
            </p>
            <div className="mt-7">
              <MagneticButton
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                See what our reporting looks like →
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="reg-ticks reg-ticks--light">
              <ReportPreview />
            </div>
            <p className="img-caption img-caption--dark text-center">
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
              <CycleGraphic className="mb-6" />
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

      {/* ── 7b · THE INVISIBLE WORK ──────────────────────────── */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The work you never see</span>
            <h2 className="balance mt-3.5 max-w-[28ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              By the time our crew knocks at 5:30 AM, most of the job has already happened.
            </h2>
            <p className="mt-4 max-w-[54ch] text-steel-600">
              Clients see technicians arrive. They don't see the week before — and the week before is where
              professional and average part ways.
            </p>
          </Reveal>
          <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {INVISIBLE.map(([t, d], i) => (
              <div key={t} className="bg-white px-5 py-4.5">
                <span className="font-mono text-[0.62rem] font-bold text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-1.5 text-[0.95rem] font-bold text-ink">{t}</div>
                <div className="mt-1 text-[0.82rem] leading-relaxed text-steel-600">{d}</div>
              </div>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/how-we-work"
              className="mt-6 inline-block font-bold text-accent-deep no-underline hover:underline"
            >
              The full anatomy — 17 steps, T−14 days to next cycle →
            </Link>
          </Reveal>
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
            {INDUSTRIES.map(([n, to]) => (
              <Link
                key={n}
                to={to}
                className="rounded-full border border-steel-200 bg-white px-4 py-2 text-[0.88rem] font-semibold text-steel-700 no-underline transition-colors hover:border-accent hover:text-accent-deep"
              >
                {n}
              </Link>
            ))}
          </Reveal>
          <Reveal delay={0.14} className="mt-5">
            <Link to="/industries" className="text-[0.9rem] font-bold text-accent-deep no-underline hover:underline">
              How we work in your sector →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · MULTI-SITE BAND ──────────────────────────────── */}
      <section className="border-y border-steel-200 bg-white py-[clamp(44px,6vw,72px)]">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="balance text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold tracking-[-0.02em]">
              Managing multiple venues?
            </h2>
            <p className="mt-2 max-w-[52ch] text-steel-600">
              The pattern in almost every group we take on: five venues, four contractors, no single view of what's
              due. The fix is one planner — venue-by-venue cycles, one contact, one report stream.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <MagneticButton
              to="/contact?type=multi-site"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.95rem] font-bold text-ink hover:bg-[#57bce8]"
            >
              Discuss a multi-site program
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · FROM THE FIELD ──────────────────────────────── */}
      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">From the field</span>
              <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
                What thirty years of this work actually looks like.
              </h2>
            </div>
            <Link to="/projects" className="font-semibold text-accent-deep no-underline hover:underline">
              Full case studies →
            </Link>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6">
                  <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-steel-600">
                    {s.stamp}
                  </span>
                  <h3 className="mt-3 text-[1.05rem] font-extrabold leading-snug">{s.t}</h3>
                  <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{s.b}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.pattern.split(" · ").map((p, x) => (
                      <InspectionTag key={p} kind={x === 0 ? "status" : "note"}>
                        {p}
                      </InspectionTag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-600">
            True patterns from delivered work — sites anonymised until permissions land.
          </p>
        </div>
      </section>

      {/* ── 10b · THE LEDGER ─────────────────────────────────── */}
      <section className="border-y border-steel-200 bg-white py-[clamp(40px,5vw,64px)]">
        <div className="wrap">
          <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [543, "", "services completed · June 2026"],
              [500, "+", "recurring obligations under management"],
              [36, "", "sub-sites at one venue, one pre-planned year"],
              [null, "SA · NT", "delivered coverage, metro to remote"],
            ].map(([v, sfx, l]) => (
              <div key={l} className="bg-paper px-6 py-5">
                <div className="display-wide text-[1.7rem] font-extrabold tracking-[-0.02em] text-ink [font-variant-numeric:tabular-nums]">
                  {v === null ? sfx : <LedgerNum v={v} suffix={sfx} />}
                </div>
                <div className="mt-1 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.12em] text-steel-600">
                  {l}
                </div>
              </div>
            ))}
          </div>
          <DimensionDivider
            label="real figures from our operations system · refreshed monthly"
            className="mt-5"
          />
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
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
