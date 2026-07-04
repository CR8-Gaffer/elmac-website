import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { INDUSTRY_PAGES } from "../data/industries.js";

export default function Industries() {
  usePageMeta(
    "Industries We Serve | Elmac Cleaning Services Adelaide",
    "Commercial cleaning programs for restaurants, hotels and pubs, shopping centres, food production, facility and property managers and multi-site groups — across SA & NT."
  );

  return (
    <>
      <section className="wrap pb-2 pt-[clamp(52px,8vw,96px)]">
        <Reveal>
          <span className="eyebrow">Industries</span>
          <h1 className="balance mt-3.5 max-w-[22ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            The obligations are the same. The operating realities aren't.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Fire risk, hygiene, evidence — every sector carries them. We build service programs around how your sites
            actually run: trade hours, access windows, permits, inductions and the people who have to sign off.
          </p>
        </Reveal>
      </section>

      <section className="wrap grid gap-4 pb-[clamp(60px,8vw,110px)] pt-9 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(INDUSTRY_PAGES).map(([slug, ind], i) => (
          <Reveal key={slug} delay={(i % 3) * 0.06}>
            <Link
              to={`/industries/${slug}`}
              className="group flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6 no-underline transition-colors hover:border-accent/60"
            >
              <h2 className="text-[1.12rem] font-extrabold leading-snug text-ink">{ind.name}</h2>
              <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-steel-600">{ind.reality}</p>
              <span className="mt-4 text-[0.88rem] font-bold text-accent-deep group-hover:underline">
                {ind.cta.label} →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
