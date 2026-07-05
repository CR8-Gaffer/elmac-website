import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Doctrine from "../components/Doctrine.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";

// The anatomy of a "four-hour clean": the visible hours are a thin slice of
// the actual job. Timeline stamps are the argument — show time, not effort.
const PHASES = [
  {
    label: "Before the knock",
    span: "T−14 days → T−1",
    tone: "before",
    steps: [
      ["T−14", "The service surfaces", "Our scheduling system flags the site due — before anyone at the venue remembers it exists."],
      ["T−10", "The schedule is solved", "Crew composition, zone routing, travel chaining, leave — decided by system, checked by people."],
      ["T−7", "Booking confirmed", "Date, time, access and the on-site contact verified with the venue. One email that prevents everything."],
      ["T−5", "Permits & inductions lodged", "Centre permit-to-work, council permits, site inductions — the paperwork with days of lead time."],
      ["T−3", "SWMS written for this site", "Risk assessment and access method for your building — not a template with the name changed."],
      ["T−2", "Plant booked, weather watched", "EWP reserved where the job needs height. Wind and rain get a call before the day does."],
      ["T−1", "Loadout", "Chemistry and equipment matched to the system we inspected. Exchange filters pulled. Run sheet issued to the crew."],
    ],
  },
  {
    label: "The part you see",
    span: "Day 0 · roughly four hours",
    tone: "visible",
    steps: [
      ["05:10", "Depart", "Loaded the night before. Nobody is finding equipment at your site."],
      ["05:30", "Arrive & sign in", "Keys, access and contact per the run sheet."],
      ["05:40", "Protection down", "Isolation done, kitchen sheeted — before a tool comes out."],
      ["06:00", "The works", "Cleaned section by section — and photographed before and after as we go, not from memory later."],
      ["09:20", "QA walk", "Checked against the quoted scope, not against 'looks fine'."],
      ["09:40", "Handover", "Reinstated, tested, operational. Kitchen opens on time."],
    ],
  },
  {
    label: "After the crew leaves",
    span: "T+0 → next cycle",
    tone: "after",
    steps: [
      ["T+0", "Evidence compiled", "Photos and technician notes processed the same cycle — not 'when we get to it'."],
      ["T+1", "Report & certificate issued", "Limitations declared, defects flagged with recommendations. The documents your insurer will ask for."],
      ["T+2", "The planner rolls forward", "Records filed per system, next service placed on the schedule. Nothing depends on anyone's memory."],
      ["T+2", "Flags become quotes", "Anything we found gets priced separately — so a defect flag can never read as upselling."],
    ],
  },
];

export default function HowWeWork() {
  usePageMeta(
    "How a Job Actually Runs — The Invisible Work | Elmac",
    "The anatomy of a four-hour commercial clean: two weeks of scheduling, permits, SWMS, plant bookings and loadout before the knock — and the reporting cycle after. Operational excellence, step by step."
  );

  return (
    <>
      <section className="bg-ink py-[clamp(52px,8vw,100px)] text-white">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">The invisible work</span>
            <h1 className="balance mt-4 max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              What looks like a four-hour clean is a two-week operation.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[clamp(1rem,1.5vw,1.12rem)] text-[#C6CFD6]">
              Clients see technicians arrive at 5:30 and leave before lunch. Here is everything that happened around
              those hours — laid out step by step, because the preparation is the difference between a contractor and
              a maintenance partner.
            </p>
            <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#8f9aa3]">
              17 steps · ~4 visible hours · days in preparation
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(52px,8vw,96px)]">
        <div className="wrap max-w-[880px]">
          {PHASES.map((phase) => (
            <Reveal key={phase.label}>
              <div
                className={`mb-8 overflow-hidden rounded-2xl border ${
                  phase.tone === "visible"
                    ? "border-accent/[0.5] bg-white shadow-[0_24px_48px_-32px_rgba(19,94,158,0.45)]"
                    : "border-steel-200 bg-white"
                }`}
              >
                <div
                  className={`flex flex-wrap items-baseline justify-between gap-2 border-b px-6 py-4 ${
                    phase.tone === "visible" ? "border-accent/[0.35] bg-accent/[0.07]" : "border-steel-200 bg-paper"
                  }`}
                >
                  <h2 className="text-[1.15rem] font-extrabold tracking-[-0.01em]">
                    {phase.tone === "visible" && <span className="mr-2 text-accent-deep">●</span>}
                    {phase.label}
                  </h2>
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-steel-400">
                    {phase.span}
                  </span>
                </div>
                <div className="grid">
                  {phase.steps.map(([t, title, body], i) => (
                    <div
                      key={t + title}
                      className={`grid grid-cols-[76px_1fr] gap-4 px-6 py-4 sm:grid-cols-[96px_1fr] ${
                        i > 0 ? "border-t border-steel-200/70" : ""
                      }`}
                    >
                      <span className="pt-0.5 font-mono text-[0.74rem] font-bold text-accent-deep">{t}</span>
                      <div>
                        <div className="text-[0.98rem] font-extrabold text-ink">{title}</div>
                        <p className="mt-1 text-[0.9rem] leading-relaxed text-steel-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="mx-auto max-w-[52ch] text-center text-[1.02rem] font-semibold text-steel-700">
              The middle box is the only part anyone watches. The other two are why it goes smoothly — and why the
              paperwork exists before anybody asks for it.
            </p>
            <div className="mt-6 flex justify-center">
              <Doctrine n={20} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              This is what "reliable contractor" actually costs to deliver.
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              We're happy to walk you through how it would run on your site — access, windows, permits and all.
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
                What arrives afterwards →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
