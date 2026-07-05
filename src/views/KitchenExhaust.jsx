import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import SpecBlock from "../components/SpecBlock.jsx";
import AnnotatedImage from "../components/AnnotatedImage.jsx";
import SideRail from "../components/SideRail.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const RAIL = [
  { id: "risks", label: "Stakes" },
  { id: "scope", label: "Scope" },
  { id: "finish", label: "Finish" },
  { id: "issues", label: "Issues" },
  { id: "process", label: "Process" },
  { id: "frequency", label: "Frequency" },
  { id: "after", label: "After" },
];
import Doctrine from "../components/Doctrine.jsx";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

const RISKS = [
  {
    t: "The fire path",
    b: "Grease deposited through canopies, ducts and fans is fuel sitting directly above open flame. Scheduled cleaning is how the load stays below the danger line.",
  },
  {
    t: "Insurance & council",
    b: "Insurers, landlords and EHOs increasingly ask for evidence of servicing — a certificate and photo record, not a verbal assurance.",
  },
  {
    t: "Kitchen performance",
    b: "A loaded system pulls less air. Heat, smoke and odour stay in the kitchen, and the canopy stops doing its job during peak service.",
  },
];

const SCOPE = [
  ["01", "Canopies & filters"],
  ["02", "Plenums"],
  ["03", "Horizontal ductwork"],
  ["04", "Vertical risers"],
  ["05", "Exhaust fans"],
  ["06", "Discharge cowls"],
  ["07", "Flanges & joints"],
  ["08", "Roof access & fan housings"],
];

const ISSUES = [
  "Excessive grease loading beyond the compliant cycle",
  "Missing or inadequate duct access panels",
  "Exhaust fans that cannot be safely reached or opened",
  "Grease leaks migrating into ceilings and neighbouring tenancies",
  "Damaged, mismatched or collapsed filters",
  "Substandard prior cleaning — surface wiped, system loaded",
];

const PROCESS = [
  ["Inspect", "Site walk: system layout, access, load, risks."],
  ["Quote", "Fixed scope in writing — what's included, what isn't."],
  ["Schedule", "Around your trade: nights, early mornings, closures."],
  ["Prepare", "Permits, inductions, isolation and protection down."],
  ["Clean", "Mechanical and chemical clean through the full scope."],
  ["Report", "Photo report, certificate, defects and access notes."],
  ["Recommend", "Next service due, and anything to fix before it."],
];

const FREQ = [
  ["Heavy grease load", "Solid fuel · charcoal · wok cooking", "Quarterly"],
  ["Standard commercial", "Most restaurant, hotel & pub kitchens", "6-monthly"],
  ["Light use", "Low-grease or limited-hours kitchens", "Annual"],
];

export default function KitchenExhaust() {
  usePageMeta(
    "Kitchen Exhaust Cleaning Adelaide | AS1851-2012 | Elmac",
    "Commercial kitchen exhaust system cleaning across SA & NT — canopies, plenums, ductwork, risers, fans and cowls, with a compliance certificate and photo report every clean. Request a site inspection."
  );

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={A("hero-canopy.jpg")}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,22,28,0.95)_0%,rgba(16,22,28,0.8)_55%,rgba(16,22,28,0.55)_100%)]" />
        <div className="wrap relative py-[clamp(52px,9vw,110px)]">
          <Reveal>
            <span className="eyebrow eyebrow--accent">SVC.01 — Kitchen exhaust system cleaning</span>
            <h1 className="balance mt-4 max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Commercial kitchen exhaust system cleaning to AS1851-2012.
            </h1>
            <p className="mt-5 max-w-[54ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              Grease-loaded exhaust systems are a fire path, an insurance question and a council finding waiting to
              happen. We strip the grease from the system end to end — restoring airflow, reducing fire load, and
              handing you the certificate and photo report that prove it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                to="/contact?service=kes"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                Request a site inspection
              </MagneticButton>
              <Link
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                See our reporting
              </Link>
            </div>
            <SpecBlock
              dark
              className="mt-9 max-w-[640px]"
              items={[
                ["Standard", "AS1851-2012"],
                ["Scope", "Canopy → cowl"],
                ["Evidence", "Report + certificate"],
                ["Windows", "Day · night · shutdown"],
              ]}
            />
          </Reveal>
        </div>
      </section>

      <SideRail items={RAIL} />

      {/* RISKS */}
      <section id="risks" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">What's at stake</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What goes wrong when the system is neglected.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RISKS.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <h3 className="text-[1.05rem] font-extrabold">{r.t}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-steel-600">{r.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section id="scope" className="scroll-mt-24 border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Scope</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Full-system scope — not just what shows.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[1rem] text-steel-600">
              Mechanical and chemical cleaning through every accessible section, roof access coordinated, with EWP and
              permits arranged where the site needs them.
            </p>
            <div className="mt-6 rounded-xl border border-accent/[0.35] bg-accent/[0.06] p-5">
              <p className="text-[0.92rem] leading-relaxed text-steel-700">
                <strong className="font-bold text-ink">If a section can't be reached, we say so.</strong> Inaccessible
                runs are documented in your report with access recommendations — not skipped in silence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {SCOPE.map(([n, t]) => (
                <div key={n} className="flex items-center gap-3 bg-paper px-4.5 py-4">
                  <span className="font-mono text-[0.72rem] font-bold text-accent-deep">{n}</span>
                  <span className="text-[0.92rem] font-semibold text-ink">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINISH SLIDER */}
      <section id="finish" className="scroll-mt-24 bg-ink py-[clamp(52px,8vw,100px)] text-white">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-2">
          <Reveal>
            <span className="eyebrow eyebrow--accent">The Elmac finish</span>
            <h2 className="balance mt-3.5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Drag to see what "cleaned to standard" means.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[#AEB8C0]">
              Every clean is photographed before and after, section by section — canopies, plenums, ducts, risers, fans
              and cowls. The slider says it faster than we can.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter
              tease
              after={A("svc-canopy.jpg")}
              note="Concept imagery — real job before/after photos to follow"
            />
          </Reveal>
        </div>
      </section>

      {/* COMMON ISSUES */}
      <section id="issues" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Found on real sites</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Common issues we identify — and flag in the report.
            </h2>
          </Reveal>
          <div className="mt-8 grid items-start gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-3">
              {ISSUES.map((t, i) => (
                <Reveal key={t} delay={(i % 2) * 0.05}>
                  <div className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white px-5 py-4">
                    <span className="mt-0.5 font-mono text-[0.8rem] font-bold text-[#b05c10]">▲</span>
                    <span className="text-[0.94rem] font-medium text-steel-700">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <AnnotatedImage
                src={A("doc-kes-plenum.jpg")}
                alt="Opened kitchen exhaust canopy during inspection with marked inspection points"
                markers={[
                  { n: 1, x: 24, y: 34, label: "Canopy interior seams — first migration path" },
                  { n: 2, x: 52, y: 58, label: "Filter bank — load and fit checked, not just swapped" },
                  { n: 3, x: 78, y: 30, label: "Plenum interior — reachable, or documented" },
                  { n: 4, x: 68, y: 74, label: "Duct mouth — where the invisible load begins" },
                ]}
                caption="What we look for — concept imagery, real inspection photography to follow"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">How it runs</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Inspect to recommend — seven steps, documented at both ends.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-xl border border-steel-200 bg-paper p-5">
                  <span className="font-mono text-[0.7rem] font-bold text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[1rem] font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-steel-600">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/how-we-work"
            className="mt-6 inline-block font-bold text-accent-deep no-underline hover:underline"
          >
            The full anatomy of a job — everything around the visible hours →
          </Link>
        </div>
      </section>

      {/* FREQUENCY */}
      <section id="frequency" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Frequency</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              How often? It depends on what you cook.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[1rem] text-steel-600">
              Cooking load drives grease load, and grease load drives the cycle. These are typical starting points
              under AS1851-2012-aligned maintenance — your insurer, landlord or council may specify shorter.
            </p>
            <Link
              to="/contact?service=kes"
              className="mt-5 inline-block font-bold text-accent-deep no-underline hover:underline"
            >
              Not sure where your kitchen sits? We'll inspect and tell you →
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-steel-200">
              {FREQ.map(([t, hint, f], i) => (
                <div
                  key={t}
                  className={`flex flex-wrap items-center justify-between gap-3 px-5.5 py-4.5 ${
                    i % 2 ? "bg-paper" : "bg-white"
                  } ${i > 0 ? "border-t border-steel-200" : ""}`}
                >
                  <div>
                    <div className="text-[0.98rem] font-extrabold text-ink">{t}</div>
                    <div className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-steel-400">
                      {hint}
                    </div>
                  </div>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-[0.78rem] font-bold text-accent-deep">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOCS + RELATED + CTA */}
      <section id="after" className="scroll-mt-24 bg-ink py-[clamp(52px,8vw,100px)] text-white">
        <div className="wrap">
          <Reveal className="flex flex-col items-center text-center">
            <Doctrine n={5} dark center />
            <span className="eyebrow eyebrow--accent">After the clean</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              You get the evidence: certificate, photo report, defects, next due.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to="/contact?service=kes"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                Request a site inspection
              </MagneticButton>
              <Link
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                Compliance &amp; reporting →
              </Link>
            </div>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/45">
              <span>Pairs with:</span>
              <Link to="/services/grease-filter-exchange" className="text-white/70 underline-offset-4 hover:text-accent">
                Grease filter exchange
              </Link>
              <Link to="/services/commercial-kitchen-deep-cleaning" className="text-white/70 underline-offset-4 hover:text-accent">
                Kitchen deep cleaning
              </Link>
              <Link to="/services/scheduled-maintenance-programs" className="text-white/70 underline-offset-4 hover:text-accent">
                Maintenance programs
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
