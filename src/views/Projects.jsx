import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import RevealImage from "../components/RevealImage.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import Doctrine from "../components/Doctrine.jsx";
import SpecBlock from "../components/SpecBlock.jsx";

// Anonymised technical case studies drawn from delivered work. Client names
// withheld pending permission — swap in names/photos as approvals land.
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
      "Staged maintenance program across the centre's common exhaust fans and associated risers, coordinated with centre management around trading, permits and induction requirements.",
    methodology:
      "Assets sequenced into night-window batches by roof zone; each fan isolated, opened, mechanically and chemically degreased, inspected and photographed individually before reinstatement and test.",
    equipment: "Roof access systems, isolation lockouts, mechanical scraping and hot chemical degrease, per-asset photographic kit.",
    safety:
      "Permit-to-work per shift under the centre's contractor system; site inductions for all crew; working-at-height controls and isolation verification per asset; night-works communication protocol with centre security.",
    documentation:
      "Per-asset photo documentation with condition notes; defects — including access limitations and mechanical wear — flagged directly to centre management with recommendations.",
    compliance:
      "Common-infrastructure servicing evidenced per asset in line with AS1851-2012 maintenance expectations — records formatted for the centre's ESM audit file.",
    outcome:
      "The centre moved from unknown condition to a documented, per-asset register with a repeatable 6-monthly cycle — and a defect list management could actually action. Centre management now answers audit questions from a file, not from memory.",
    lessons:
      "On multi-asset infrastructure, the register is worth as much as the clean — condition data per asset turned ad-hoc maintenance into a schedulable program.",
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
      "A full financial-year planner across the group: kitchen exhaust servicing on risk-based cycles per kitchen, 4-weekly filter exchange across all venues, deep cleans and washdowns placed into quiet trading weeks.",
    methodology:
      "Every site audited first — systems, cooking load, access and history. Cycles set per kitchen rather than per venue, then locked into a single FY planner agreed once with group management and run without re-negotiation.",
    equipment:
      "Standard KES cleaning plant per site class; exchange filter stock pool sized to the group; scheduling handled through Elmac's planning system.",
    safety:
      "Site-specific SWMS per venue; after-hours access protocols agreed per site; chemical handling controls consistent across all kitchens.",
    documentation:
      "One consolidated report stream: certificates and photo reports per visit, per venue, accumulating into a group-wide compliance history.",
    compliance:
      "Every kitchen brought onto a defined, evidenced cycle aligned to AS1851-2012 — group-level visibility of due, done and overdue for insurance and audit purposes.",
    outcome:
      "Group admin dropped to reviewing a planner instead of chasing quotes; compliance visibility went from per-venue guesswork to a single view. The model now onboards each new venue by default.",
    lessons:
      "Groups don't need more reminders — they need the schedule decided once, properly. The audit-first approach surfaced two kitchens on badly wrong cycles that no reminder system would have caught.",
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
    methodology:
      "Duct run traced through the ceiling void from the source kitchen; joints and seams inspected under load; the failed section identified and documented photographically before any remediation began — evidence first, fix second.",
    equipment:
      "Void access equipment, inspection lighting and photography, hot chemical degrease for contaminated surfaces, duct sealing materials for the failed joint.",
    safety:
      "Confined-void access controls; isolation of the source system during works; protection of the affected tenancy's stock and fittings throughout.",
    documentation:
      "Investigation findings with photographic evidence of the migration path, the remediation performed, and a preventive maintenance recommendation for the source system — written for the property manager to hand to owner and tenants.",
    compliance:
      "Source system returned to a compliant servicing cycle; the documented investigation gave the property manager a defensible record of cause, remedy and prevention.",
    outcome:
      "Complaint closed with evidence rather than opinion; the source kitchen moved onto a compliant cycle; the property manager kept a document trail showing the issue was found, fixed and prevented.",
    lessons:
      "Grease complaints between tenancies are diagnosable — the failure is almost always a specific joint or breach, and photographing the path before fixing it is what turns a dispute into a closed file.",
  },
];

const SECTIONS = [
  ["challenge", "Site challenge"],
  ["scope", "Scope of works"],
  ["methodology", "Methodology"],
  ["equipment", "Equipment"],
  ["safety", "Safety controls"],
  ["documentation", "Documentation"],
  ["compliance", "Compliance evidence"],
  ["outcome", "Outcome & client benefit"],
  ["lessons", "Lessons learned"],
];

export default function Projects() {
  usePageMeta(
    "Projects & Case Studies | Elmac Cleaning Services",
    "Technical case studies from delivered work — shopping centre exhaust fan programs, multi-venue maintenance planners and grease leak investigations: challenge, methodology, safety controls, compliance and outcomes."
  );

  return (
    <>
      <section className="wrap grid items-center gap-[clamp(28px,5vw,64px)] pb-2 pt-[clamp(52px,8vw,96px)] lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h1 className="balance mt-3.5 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            Complex sites are the day job.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            These aren't galleries — they're technical case studies, told the way we run the work: challenge, scope,
            methodology, safety controls, documentation, outcome. Anonymised until client permissions land.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block">
          <figure>
            <div className="reg-ticks">
              <RevealImage
                src={`${import.meta.env.BASE_URL}assets/doc-harness-check.jpg`}
                alt="Technician performing a pre-lift harness check"
                className="aspect-[4/3] w-full rounded-xl border border-steel-200 object-cover"
              />
            </div>
            <figcaption className="img-caption">
              Pre-lift checks — concept imagery, real crew photography to follow
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-[clamp(28px,4vw,48px)] pb-[clamp(60px,8vw,110px)] pt-9">
        {CASES.map((c, i) => (
          <Reveal key={c.title}>
            <article className="overflow-hidden rounded-2xl border border-steel-200 bg-white">
              <div className="border-b border-steel-200 bg-paper px-[clamp(20px,3.5vw,40px)] py-6">
                <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                  Operational debrief · Case {String(i + 1).padStart(2, "0")} — {c.tag}
                </span>
                <h2 className="balance mt-2.5 text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.015em]">
                  {c.title}
                </h2>
                <SpecBlock items={c.spec} className="mt-4" />
              </div>
              <div className="grid gap-x-[clamp(24px,4vw,56px)] gap-y-6 px-[clamp(20px,3.5vw,40px)] py-8 md:grid-cols-2">
                {SECTIONS.map(([key, label]) => (
                  <div
                    key={key}
                    className={
                      key === "outcome"
                        ? "md:col-span-2 rounded-xl border border-accent/[0.35] bg-accent/[0.06] p-5"
                        : key === "lessons"
                          ? "md:col-span-2"
                          : ""
                    }
                  >
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
            <Doctrine n={16} dark center />
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
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
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
