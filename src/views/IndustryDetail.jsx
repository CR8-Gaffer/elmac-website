import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import Doctrine from "../components/Doctrine.jsx";
import { INDUSTRY_PAGES } from "../data/industries.js";

function Meta({ ind }) {
  usePageMeta(ind.meta.title, ind.meta.desc);
  return null;
}

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = INDUSTRY_PAGES[slug];
  if (!ind) return <Navigate to="/industries" replace />;

  return (
    <>
      <Meta ind={ind} />

      {/* HERO */}
      <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow eyebrow--accent">Industries — {ind.name}</span>
            <h1 className="balance mt-4 max-w-[22ch] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.02em]">
              Cleaning programs built for {ind.name.toLowerCase()}.
            </h1>
            <p className="mt-5 max-w-[58ch] text-[clamp(0.98rem,1.45vw,1.1rem)] text-[#C6CFD6]">{ind.reality}</p>
            <div className="mt-8">
              <MagneticButton
                to={ind.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {ind.cta.label}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PAINS */}
      <section className="py-[clamp(48px,7vw,80px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The operating reality</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              The problems that keep landing on your desk.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {ind.pains.map((t, i) => (
              <Reveal key={t} delay={(i % 2) * 0.05}>
                <div className="flex items-start gap-3 rounded-lg border border-steel-200 bg-white px-5 py-4">
                  <span className="mt-0.5 font-mono text-[0.8rem] font-bold text-[#b05c10]">▲</span>
                  <span className="text-[0.94rem] font-medium text-steel-700">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,80px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Recommended program</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What we'd put on your planner.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[1rem] text-steel-600">
              Set properly at inspection — these are the cycles this sector usually needs, adjusted to each site's
              load, access and obligations.
            </p>
            <Link
              to="/services"
              className="mt-5 inline-block font-bold text-accent-deep no-underline hover:underline"
            >
              Explore all services →
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-steel-200">
              {ind.program.map(([t, d], i) => (
                <div
                  key={t}
                  className={`px-5.5 py-4.5 ${i % 2 ? "bg-white" : "bg-paper"} ${
                    i > 0 ? "border-t border-steel-200" : ""
                  }`}
                >
                  <div className="text-[0.98rem] font-extrabold text-ink">{t}</div>
                  <div className="mt-1 text-[0.9rem] text-steel-600">{d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ELMAC */}
      <section className="py-[clamp(48px,7vw,80px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why Elmac</span>
            <h2 className="balance mt-3.5 max-w-[24ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Built for how your sites actually run.
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-4">
            {ind.why.map((t) => (
              <Reveal key={t}>
                <div className="flex items-start gap-3.5">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <p className="text-[1rem] font-medium text-steel-700">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <Doctrine n={23} dark center />
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Every service documented. Every defect flagged. Every cycle visible.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to={ind.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {ind.cta.label}
              </MagneticButton>
              <Link
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                Compliance &amp; reporting →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
