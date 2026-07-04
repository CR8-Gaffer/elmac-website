import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";

// Anonymised case studies drawn from delivered work. Client names withheld
// pending permission — swap in names/photos as approvals land.
const CASES = [
  {
    tag: "Shopping centre",
    spec: [
      ["Client type", "Major SA shopping centre"],
      ["Access", "Night works · PTW · roof access"],
      ["Cycle", "6-monthly KEF program"],
    ],
    title: "Centre-wide common exhaust fan program",
    challenge:
      "Dozens of common kitchen exhaust fans serving food tenancies — roof-mounted, permit-controlled, and serviceable only in after-hours windows. No single record of condition existed across the asset base.",
    scope:
      "Staged cleaning program across the centre's common exhaust fans and associated risers, coordinated with centre management around trading, permits and induction requirements.",
    execution:
      "Crews inducted and permitted under the centre's contractor system; works run in night windows with roof access keys and isolation managed per asset; each fan cleaned, inspected and photographed individually.",
    documentation:
      "Per-asset photo documentation with condition notes; defects — including access limitations and mechanical wear — flagged directly to centre management with recommendations.",
    outcome:
      "The centre moved from unknown condition to a documented, per-asset register with a repeatable 6-monthly cycle — and a defect list management could actually action.",
  },
  {
    tag: "Hospitality group",
    spec: [
      ["Client type", "Multi-venue hospitality group"],
      ["Access", "Trade-aware scheduling per venue"],
      ["Cycle", "FY annual planner"],
    ],
    title: "Group-wide annual maintenance planner",
    challenge:
      "Multiple venues, each with its own kitchens, grease loads and half-remembered service history — different contractors at different sites, no group-level view of what was due or overdue.",
    scope:
      "A full financial-year planner across the group: kitchen exhaust cleans on risk-based cycles per kitchen, 4-weekly filter exchange across all venues, deep cleans and washdowns placed into quiet trading weeks.",
    execution:
      "Sites audited venue by venue; the planner agreed once with group management, then run without re-negotiation — every service scheduled, delivered and reported on cadence.",
    documentation:
      "One consolidated report stream: certificates and photo reports per visit, per venue, accumulating into a group-wide compliance history.",
    outcome:
      "Group admin dropped to reviewing a planner instead of chasing quotes; compliance visibility went from per-venue guesswork to a single view. The model now onboards each new venue by default.",
  },
  {
    tag: "Investigation",
    spec: [
      ["Client type", "Property manager — retail tenancy"],
      ["Access", "Ceiling voids · adjoining tenancy"],
      ["Cycle", "Remediation + preventive schedule"],
    ],
    title: "Grease leak diagnosis & remediation",
    challenge:
      "Grease appearing in a tenancy that didn't cook — migrating from a neighbouring kitchen's exhaust infrastructure through the ceiling void, with the property manager holding the complaint and no clear cause.",
    scope:
      "Investigate the migration path, identify the failure point in the exhaust run, remediate the contamination and prevent recurrence.",
    execution:
      "Duct run traced through the void; the leaking section and its cause identified and documented; contaminated areas degreased and cleaned; the source kitchen's system cleaned and its cycle corrected.",
    documentation:
      "Investigation findings with photographic evidence of the migration path, the remediation performed, and a preventive maintenance recommendation for the source system — written for the property manager to hand to owner and tenants.",
    outcome:
      "Complaint closed with evidence rather than opinion; the source kitchen moved onto a compliant cycle; the property manager kept a document trail showing the issue was found, fixed and prevented.",
  },
];

const SECTIONS = [
  ["challenge", "Site challenge"],
  ["scope", "Scope of works"],
  ["execution", "Execution"],
  ["documentation", "Documentation"],
  ["outcome", "Outcome"],
];

export default function Projects() {
  usePageMeta(
    "Projects & Case Studies | Elmac Cleaning Services",
    "Delivered commercial cleaning work — shopping centre exhaust fan programs, multi-venue maintenance planners and grease leak investigations, documented end to end."
  );

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h1 className="balance mt-3.5 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            Complex sites are the day job.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Three recent bodies of work, told the way we run them: challenge, scope, access, execution, documentation,
            outcome. Anonymised — client names and photography will be added as permissions land.
          </p>
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-[clamp(28px,4vw,48px)] pb-[clamp(60px,8vw,110px)] pt-9">
        {CASES.map((c, i) => (
          <Reveal key={c.title}>
            <article className="overflow-hidden rounded-2xl border border-steel-200 bg-white">
              <div className="border-b border-steel-200 bg-paper px-[clamp(20px,3.5vw,40px)] py-6">
                <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                  Case {String(i + 1).padStart(2, "0")} — {c.tag}
                </span>
                <h2 className="balance mt-2.5 text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.015em]">
                  {c.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                  {c.spec.map(([k, v]) => (
                    <div key={k}>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel-400">
                        {k}:{" "}
                      </span>
                      <span className="font-mono text-[0.72rem] font-semibold tracking-[0.04em] text-steel-700">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-x-[clamp(24px,4vw,56px)] gap-y-6 px-[clamp(20px,3.5vw,40px)] py-8 md:grid-cols-2">
                {SECTIONS.map(([key, label]) => (
                  <div key={key} className={key === "outcome" ? "md:col-span-2 rounded-xl border border-accent/[0.35] bg-accent/[0.06] p-5" : ""}>
                    <h3 className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                      {label}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-steel-700">{c[key]}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Your site has its own complications. Good.
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Access, permits, night windows, awkward systems — bring them. Planning around them is the part we're
              best at.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#22c0cd]"
              >
                Request a site inspection
              </MagneticButton>
              <Link
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                See our reporting →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
