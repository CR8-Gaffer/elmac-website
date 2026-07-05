import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import Doctrine from "../components/Doctrine.jsx";
import { SERVICE_PAGES } from "../data/services.js";
import { DOCTRINE_BY_SLUG } from "../data/doctrine.js";

const A = (f) => `${import.meta.env.BASE_URL}assets/${f}`;

const PROCESS = [
  ["Inspect", "Site walk: scope, access, load, risks."],
  ["Quote", "Fixed scope in writing — inclusions named."],
  ["Schedule", "Around your trade and access windows."],
  ["Deliver", "The works, run to the site plan."],
  ["Report", "Photos, notes, defects and observations."],
  ["Recommend", "The next cycle, based on what we found."],
];

function Meta({ svc }) {
  usePageMeta(svc.meta.title, svc.meta.desc);
  return null;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICE_PAGES[slug];
  if (!svc) return <Navigate to="/services" replace />;

  return (
    <>
      <Meta svc={svc} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={A(svc.image)}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,37,73,0.95)_0%,rgba(14,37,73,0.82)_55%,rgba(14,37,73,0.6)_100%)]" />
        <div className="wrap relative py-[clamp(52px,8vw,100px)]">
          <Reveal>
            <span className="eyebrow eyebrow--accent">{svc.code} — Service</span>
            <h1 className="balance mt-4 max-w-[24ch] text-[clamp(1.8rem,4.2vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.02em]">
              {svc.title}
            </h1>
            <p className="mt-5 max-w-[58ch] text-[clamp(0.98rem,1.45vw,1.1rem)] text-[#C6CFD6]">{svc.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                to={svc.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {svc.cta.label}
              </MagneticButton>
              <Link
                to="/compliance-reporting"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-5.5 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                See our reporting
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RISKS */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">What's at stake</span>
            <h2 className="balance mt-3.5 max-w-[26ch] text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              What goes wrong when it's neglected.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {svc.risks.map((r, i) => (
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
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Scope</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              {svc.scope.heading}
            </h2>
            {svc.scope.note && (
              <div className="mt-6 rounded-xl border border-accent/[0.35] bg-accent/[0.06] p-5">
                <p className="text-[0.92rem] leading-relaxed text-steel-700">{svc.scope.note}</p>
              </div>
            )}
            <p className="mt-6 text-[0.95rem] leading-relaxed text-steel-600">
              <strong className="font-bold text-ink">Who it's for: </strong>
              {svc.who}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200">
              {svc.scope.items.map((t, i) => (
                <div key={t} className="flex items-center gap-3.5 bg-paper px-5 py-4">
                  <span className="font-mono text-[0.72rem] font-bold text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.94rem] font-semibold text-ink">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPTIONAL SLIDER */}
      {svc.slider && (
        <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
          <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-2">
            <Reveal>
              <span className="eyebrow eyebrow--accent">The Elmac finish</span>
              <h2 className="balance mt-3.5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                Drag to see the standard.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[#AEB8C0]">
                Photographed before and after — because the difference should be visible, not described.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <BeforeAfter
                tease
                before={svc.sliderBefore ? A(svc.sliderBefore) : undefined}
                after={A(svc.slider)}
                note="Concept imagery — real job before/after photos to follow"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">How it runs</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Inspect to recommend — documented at both ends.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map(([t, b], i) => (
              <Reveal key={t} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-xl border border-steel-200 bg-white p-5">
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

      {/* CYCLES */}
      <section className="border-y border-steel-200 bg-white py-[clamp(48px,7vw,88px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,64px)] lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Frequency</span>
            <h2 className="balance mt-3.5 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Typical cycles — set properly at inspection.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[1rem] text-steel-600">
              Starting points, not promises — the site's load, access and obligations set the real cadence, and your
              insurer or landlord may specify shorter.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-steel-200">
              {svc.cycles.map(([t, hint, f], i) => (
                <div
                  key={t}
                  className={`flex flex-wrap items-center justify-between gap-3 px-5.5 py-4.5 ${
                    i % 2 ? "bg-white" : "bg-paper"
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

      {/* CTA + RELATED */}
      <section className="bg-ink py-[clamp(52px,8vw,96px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <Doctrine n={DOCTRINE_BY_SLUG[slug]} dark center />
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Documented every visit — certificate-backed where compliance applies.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to={svc.cta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                {svc.cta.label}
              </MagneticButton>
              <a
                href="tel:1800435622"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.25] px-6 py-3.5 text-[0.98rem] font-bold text-white no-underline transition-colors hover:border-accent hover:text-accent"
              >
                1800 4 ELMAC
              </a>
            </div>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/45">
              <span>Pairs with:</span>
              {svc.related.map(([t, to]) => (
                <Link key={to} to={to} className="text-white/70 underline-offset-4 hover:text-accent">
                  {t}
                </Link>
              ))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
