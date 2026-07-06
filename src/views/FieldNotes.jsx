import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import RevealImage from "../components/RevealImage.jsx";
import Doctrine from "../components/Doctrine.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import { NOTES, SECTIONS } from "../data/fieldnotes.js";

// Engineering handbook, not a blog: numbered sections, entries answer one
// real client question each, and every entry lives on its own URL.
export default function FieldNotes() {
  usePageMeta(
    "Field Notes — The Kitchen Exhaust & Asset Maintenance Handbook | Elmac",
    "A public engineering handbook from thirty years of industrial cleaning — kitchen exhaust systems, compliance and documentation, maintenance cycles. The questions clients ask, answered by operators."
  );

  const sections = Object.entries(SECTIONS).map(([id, s]) => ({
    id: Number(id),
    ...s,
    notes: NOTES.filter((n) => n.section === Number(id)),
  }));

  return (
    <>
      <section className="wrap grid items-center gap-[clamp(28px,5vw,64px)] pb-2 pt-[clamp(52px,8vw,96px)] lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <span className="eyebrow">Field Notes — the handbook</span>
          <h1 className="balance mt-3.5 max-w-[24ch] text-[clamp(2rem,4.4vw,3.3rem)] font-extrabold tracking-[-0.02em]">
            What thirty years in ceilings, rooftops and kitchens teaches you.
          </h1>
          <p className="mt-4 max-w-[58ch] text-[1.08rem] text-steel-600">
            Not a blog — a working handbook. Numbered sections, one real question per entry, answered the way we
            answer it on-site: verdict first, mechanism second, opinion included. It grows as the questions do.
          </p>
          <Doctrine n={8} />
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block">
          <figure>
            <div className="reg-ticks">
              <RevealImage
                src={`${import.meta.env.BASE_URL}assets/doc-duct-torch.jpg`}
                alt="Torchlit interior of a kitchen exhaust duct during inspection"
                className="aspect-[4/3] w-full rounded-xl border border-steel-200 object-cover"
              />
            </div>
            <figcaption className="img-caption">
              The inspection's point of view — concept imagery, real duct photography to follow
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="wrap flex flex-col gap-[clamp(32px,5vw,56px)] pb-[clamp(60px,8vw,110px)] pt-10">
        {sections.map((s) => (
          <Reveal key={s.id}>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-ink pb-3">
                <span className="font-mono text-[0.8rem] font-bold text-accent-deep">§{s.id}</span>
                <h2 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-extrabold tracking-[-0.015em]">{s.title}</h2>
                <span className="text-[0.88rem] text-steel-400">{s.blurb}</span>
              </div>
              <div className="mt-4 grid gap-3">
                {s.notes.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/field-notes/${n.slug}`}
                    className={`group flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xl border px-5 py-4 no-underline transition-colors ${
                      n.cornerstone
                        ? "border-accent/[0.4] bg-accent/[0.05] hover:border-accent"
                        : "border-steel-200 bg-white hover:border-accent/60"
                    }`}
                  >
                    <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent-deep">
                      {n.code}
                      {n.cornerstone && " ★"}
                    </span>
                    <span className="flex-1 basis-[280px] text-[1rem] font-bold text-ink group-hover:underline">
                      {n.q}
                    </span>
                    <span className="hidden text-[0.86rem] text-steel-400 md:inline">{n.verdict.slice(0, 64)}…</span>
                    <span className="font-bold text-accent-deep">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-400">
          New entries monthly · sections §4 (filters &amp; equipment) and §5 (site operations) open with their first
          entries.
        </p>
      </section>

      <section className="bg-ink py-[clamp(48px,7vw,88px)] text-white">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="balance max-w-[26ch] text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Got a question the handbook hasn't answered yet?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[#AEB8C0]">
              Ask it. The best entries in here started as a question someone asked us on a rooftop.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink hover:bg-[#57bce8]"
              >
                Ask us on-site — request an inspection
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
