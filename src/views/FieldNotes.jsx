import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import Doctrine from "../components/Doctrine.jsx";

// The questions we actually get asked on-site, answered the way we answer
// them on-site. This page is the company's accumulated judgement, written down.
const NOTES = [
  {
    q: "Why is grease dripping from my canopy joints?",
    a: "Because the system is telling you its interior is full. Grease vapour condenses on every internal surface, then heat cycles work it along seams and joints until gravity wins — the drip you can see is coming from load you can't. By the time staff notice drips on the cookline, the interior surfaces upstream are already carrying more than the compliant cycle allows.",
    take: "Drips are a lag indicator. If you're seeing them, the cycle isn't due — it's overdue.",
  },
  {
    q: "Why does vertical ductwork load up differently?",
    a: "Airflow slows and cools as it climbs. Grease vapour that stayed airborne through the hot horizontal run condenses higher up the riser where surfaces are cooler — so vertical sections often carry heavier, harder deposits than the duct behind the canopy. They're also the hardest sections to access, which is exactly why cut-rate cleans skip them.",
    take: "Ask any contractor how they access your riser. The length of the pause tells you everything.",
  },
  {
    q: "Why do access panels matter so much?",
    a: "Because no panel means no mechanical clean for that section — full stop. A duct run without access can only be cleaned as far as arms and equipment reach from either end; everything between stays loaded, invisibly, forever. Installing panels is a one-off cost. Skipping the sections they'd open is a permanent one. Missing access panels are the single most common defect we flag in reports.",
    take: "If your last report doesn't mention access, ask what was skipped to avoid mentioning it.",
  },
  {
    q: "Why do cleaning frequencies differ between kitchens?",
    a: "Grease load is a property of the kitchen, not the contract. Solid fuel, charcoal and wok cooking load a system in weeks; a café canopy might take a year to reach the same state. Hours of operation, menu, airflow design and even filter discipline all move the number. That's why AS1851-2012-aligned maintenance is set per system after inspection — and why your insurer or landlord may specify shorter than the typical guide.",
    take: "A contractor who quotes you a frequency before seeing the kitchen is quoting a contract, not a maintenance plan.",
  },
  {
    q: "What does AS1851-2012 actually ask of me?",
    a: "It's the Australian Standard for routine servicing of fire protection systems and equipment — and kitchen exhaust systems sit inside it because a loaded duct is a fire path. The practical obligation is evidence of routine servicing: that the system is maintained on an appropriate cycle and that records exist to prove it. Councils, insurers and landlords all lean on it because it gives them something checkable.",
    take: "The standard runs on evidence. The certificate and report matter as much as the clean itself.",
  },
  {
    q: "Why does the report outlast the clean?",
    a: "A clean lasts one cycle. The report lasts the insurance renewal, the council inspection, the landlord audit, the incident investigation, even the sale of the business. It's the difference between saying the system was maintained and proving it, years later, with photographs and dates. That's why we treat documentation as a deliverable, not an attachment.",
    take: "Our standard: a report should be valuable enough that a facilities manager keeps it long after the job is complete.",
  },
];

export default function FieldNotes() {
  usePageMeta(
    "Field Notes — Kitchen Exhaust & Compliance, Explained | Elmac",
    "Why grease drips, why risers load differently, why access panels decide cleaning quality, what AS1851-2012 actually requires — the questions we get asked on-site, answered plainly."
  );

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Field notes</span>
          <h1 className="balance mt-3.5 max-w-[22ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            What thirty years in ceilings, rooftops and kitchens teaches you.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            These are the questions we get asked on-site, answered the way we answer them on-site — plainly, and with
            an opinion. If your current contractor can't explain these, that's worth knowing too.
          </p>
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-5 pb-[clamp(60px,8vw,110px)] pt-9">
        {NOTES.map((n, i) => (
          <Reveal key={n.q}>
            <article className="overflow-hidden rounded-xl border border-steel-200 bg-white">
              <div className="grid gap-x-[clamp(24px,4vw,56px)] gap-y-4 px-[clamp(20px,3.5vw,40px)] py-7 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent-deep">
                    FN.{String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="balance mt-2.5 text-[clamp(1.25rem,2.2vw,1.7rem)] font-extrabold leading-[1.15] tracking-[-0.015em]">
                    {n.q}
                  </h2>
                </div>
                <div>
                  <p className="text-[0.98rem] leading-relaxed text-steel-700">{n.a}</p>
                  <p className="mt-4 rounded-lg border-l-2 border-accent bg-accent/[0.06] px-4 py-3 text-[0.92rem] font-semibold text-ink">
                    {n.take}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <Doctrine n={28} dark center />
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Got a question your contractor couldn't answer?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Bring it to an inspection. Walking a site and explaining what we're seeing is the part of the job we'd
              do for free anyway.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#3D95DD]"
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
