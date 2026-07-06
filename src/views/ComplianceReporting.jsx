import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ReportPreview from "../components/ReportPreview.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import SideRail from "../components/SideRail.jsx";

const RAIL = [
  { id: "receive", label: "Deliverables" },
  { id: "report", label: "The report" },
  { id: "who", label: "Who asks" },
  { id: "records", label: "Over a year" },
  { id: "verify", label: "Check us" },
];
import Doctrine from "../components/Doctrine.jsx";

const RECEIVE = [
  {
    t: "Photo report",
    b: "Before/after photography through every system section — canopy, plenum, duct, riser, fan, cowl.",
  },
  {
    t: "Compliance certificate",
    b: "Certificate of service issued with every compliance clean, aligned to AS1851-2012.",
  },
  {
    t: "Defect & access notes",
    b: "Missing panels, unreachable runs, grease leaks, damaged filters — flagged with a recommendation, not buried.",
  },
  {
    t: "Next-cycle recommendation",
    b: "When the system is due again, based on what we actually found — so the schedule reflects the site, not a guess.",
  },
];

const ANNOTATIONS = [
  ["Section-by-section evidence", "Each part of the system gets its own before/after pair and technician note."],
  ["Status at a glance", "One banner answers the question your auditor asks first: is the cycle compliant?"],
  ["Honest limitations", "If 2 metres of riser can't be reached, the report says so — with a fix, not silence."],
  ["Defects flagged early", "Problems found during the clean become line items you can act on before they're findings."],
  ["Next service due", "Every report closes with when the system needs attention again."],
];

const ASKERS = [
  {
    t: "Insurers",
    b: "Premium reviews and fire-related claims turn on evidence of scheduled servicing. Your report history is that evidence.",
  },
  {
    t: "Council EHOs",
    b: "When the inspector asks how the exhaust system is maintained, you hand over records instead of promises.",
  },
  {
    t: "Landlords & facility managers",
    b: "Principal reporting and Form 3 support — the documentation chain FM and property teams are obliged to keep.",
  },
];

const MONTHS = ["J", "A", "S", "O", "N", "D", "J", "F", "M", "A", "M", "J"];

export default function ComplianceReporting() {
  usePageMeta(
    "Compliance Reporting & Certificates | Elmac Cleaning Services",
    "Photo reports, compliance certificates, defect notes and service records with every clean — the documentation your insurer, council and landlord actually ask for. AS1851-2012 aligned."
  );

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink py-[clamp(52px,9vw,110px)] text-white">
        <img
          src={`${import.meta.env.BASE_URL}assets/doc-report-bench.jpg`}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,37,73,0.95)_0%,rgba(14,37,73,0.82)_55%,rgba(14,37,73,0.6)_100%)]" />
        <span className="absolute bottom-3.5 right-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/40">
          The deliverable — concept imagery, real report photography to follow
        </span>
        <div className="wrap relative">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Compliance &amp; reporting</span>
            <h1 className="balance mt-4 max-w-[20ch] text-[clamp(1.9rem,4.4vw,3.3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Anyone can tell you it's clean. We show you.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              Every Elmac compliance clean is documented with before/after photography, technician notes, defect
              observations and a certificate — the records your insurer, your council EHO and your landlord actually
              ask for. When something needs attention, it's in the report with a recommendation, not left for the next
              audit to find.
            </p>
          </Reveal>
        </div>
      </section>

      <SideRail items={RAIL} />

      {/* WHAT YOU RECEIVE */}
      <section id="receive" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">After every service</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What you receive.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECEIVE.map((r, i) => (
              <Reveal key={r.t} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <span className="font-mono text-[0.7rem] font-bold text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 text-[1.02rem] font-extrabold">{r.t}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-steel-600">{r.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE REPORT, ANNOTATED */}
      <section id="report" className="scroll-mt-24 border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="reg-ticks relative">
              <ReportPreview annotated />
            </div>
            <p className="img-caption text-center">
              Representative sample — layout of the report issued after every compliance clean
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow">Anatomy of the report</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Built to be handed straight to whoever's asking.
            </h2>
            <div className="mt-6 grid gap-4">
              {ANNOTATIONS.map(([t, b], i) => (
                <div key={t} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[4px] border border-accent-deep/60 bg-white font-mono text-[0.62rem] font-bold text-accent-deep">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-[0.98rem] font-extrabold text-ink">{t}</div>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-steel-600">{b}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 rounded-lg border-l-2 border-accent bg-accent/[0.06] px-4.5 py-3.5 text-[0.95rem] font-semibold text-ink">
              Our standard: a report should be valuable enough that a facilities manager keeps it long after the job
              is complete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHO ASKS */}
      <section id="who" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Who asks for this</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Three audiences, one document trail.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ASKERS.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-6">
                  <h3 className="text-[1.05rem] font-extrabold">{a.t}</h3>
                  <p className="mt-2.5 text-[0.93rem] leading-relaxed text-steel-600">{a.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECORDS OVER TIME */}
      <section id="records" className="scroll-mt-24 border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Over a year</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              One service is a record. A schedule is a defence.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[1rem] text-steel-600">
              On a scheduled maintenance program the documents accumulate into a year-round compliance history — filter
              exchanges on their short cycle, KES cleans on the risk-based cycle, and an annual review across the lot.
              That history is what stands behind you at renewal, audit or claim time.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-steel-200 bg-paper p-6">
              <div className="flex items-center justify-between gap-1">
                {MONTHS.map((m, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className={`grid h-9 w-full max-w-[34px] place-items-center rounded-md border font-mono text-[0.62rem] font-bold ${
                        i === 2 || i === 8
                          ? "border-accent bg-accent/15 text-accent-deep"
                          : i === 11
                            ? "border-[#b05c10]/50 bg-[#b05c10]/10 text-[#b05c10]"
                            : "border-steel-200 bg-white text-steel-400"
                      }`}
                    >
                      {i === 2 || i === 8 ? "KES" : i === 11 ? "REV" : "•"}
                    </div>
                    <span className="font-mono text-[0.58rem] uppercase text-steel-400">{m}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-steel-600">
                <span>• Filter exchange each cycle</span>
                <span className="text-accent-deep">KES — 6-monthly system clean (typical)</span>
                <span className="text-[#b05c10]">REV — annual compliance review</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VERIFY US */}
      <section id="verify" className="scroll-mt-24 py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Check everything</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              A website is claims. Here's how to verify ours.
            </h2>
            <p className="mt-4 max-w-[56ch] text-[1rem] text-steel-600">
              Everything on this site is checkable, and we'd rather you checked. If another contractor's website says
              all of this too — good. Ask them for the same evidence.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["Contractor licence — PGE342023", "Plumbing, gas and electrical. Searchable on the SA Consumer & Business Services public licence register in under a minute."],
              ["A sample report", "Ask us for one before you book anything. The format is the argument — anonymised, from a real job."],
              ["SA Water approved facility", "Our filter-cleaning facility approval — evidence available on request."],
              ["Partnerships", "Official Supply Partner & Sponsor of the Adelaide Crows, Adelaide 36ers and Adelaide Oval."],
              ["Insurance certificates", "Certificates of currency issued to your procurement team on request, ahead of the quote."],
              ["References", "Facility managers and venue operators who've run our cycles for years, available on request."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={(i % 2) * 0.05}>
                <div className="flex h-full items-start gap-3.5 rounded-xl border border-steel-200 bg-white p-5">
                  <span className="mt-0.5 font-mono text-[0.8rem] font-bold text-accent-deep">✓</span>
                  <div>
                    <div className="text-[0.98rem] font-extrabold text-ink">{t}</div>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-steel-600">{b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-[clamp(52px,8vw,100px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <Doctrine n={10} dark center />
            <h2 className="balance max-w-[24ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Council inspection or insurance renewal coming up?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Tell us the deadline. Compliance-critical work gets priority scheduling, and the documentation is part of
              the job — not an extra.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              to="/contact?intent=compliance"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
            >
              Request documentation support
            </MagneticButton>
            <Link
              to="/services/kitchen-exhaust-cleaning"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
            >
              Kitchen exhaust cleaning →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
