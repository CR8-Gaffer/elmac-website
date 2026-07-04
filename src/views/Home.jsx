import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "../components/Reveal.jsx";
import Stat from "../components/Stat.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

const SLIDES = [
  {
    label: "Adelaide Crows — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_20%_0%,#2a3947_0%,#141d26_55%,#0b1117_100%)]",
  },
  {
    label: "Adelaide Oval — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_80%_10%,#26424a_0%,#132027_55%,#0b1117_100%)]",
  },
  {
    label: "Adelaide 36ers — partnership photo",
    cls: "bg-[radial-gradient(120%_120%_at_50%_100%,#33303f_0%,#171b26_55%,#0b1117_100%)]",
  },
];

const CHIPS = ["30+ years", "SA family owned", "SA & NT coverage", "AS1851-2012 certified"];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-20" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <div
              key={s.label}
              data-label={s.label}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${s.cls} ${
                i === slide ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="absolute bottom-3.5 right-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,22,28,0.94)_0%,rgba(16,22,28,0.7)_46%,rgba(16,22,28,0.28)_100%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(90deg,#000,transparent_80%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="wrap relative py-[clamp(56px,10vw,120px)]">
          <motion.span
            className="eyebrow eyebrow--accent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elmaculate Service &amp; Standards
          </motion.span>
          <motion.h1
            className="balance mt-4 max-w-[16ch] text-[clamp(2.1rem,5.2vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.02em]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Official Supply Partner &amp; Sponsor to the <span className="text-accent">Adelaide Crows</span>, the{" "}
            <span className="text-accent">Adelaide 36ers</span> and the <span className="text-accent">Adelaide Oval</span>.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[44ch] text-[clamp(1rem,1.6vw,1.18rem)] text-[#C6CFD6]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Compliance-certified kitchen exhaust &amp; extraction cleaning to AS1851-2012 — trusted across South
            Australia and the Northern Territory.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-2.5"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {CHIPS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.04] px-3.5 py-2 font-mono text-[0.72rem] tracking-[0.06em] text-[#DCE3E8] backdrop-blur-sm"
              >
                <i className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-[clamp(20px,5vw,64px)] flex gap-2" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSlide(i)}
              className={`h-1 w-[26px] rounded-sm ${i === slide ? "bg-accent" : "bg-white/[0.22]"}`}
            />
          ))}
        </div>
      </section>

      {/* ── WELCOME ──────────────────────────────────────────── */}
      <section className="py-[clamp(56px,9vw,110px)]">
        <div className="wrap grid items-start gap-[clamp(28px,5vw,72px)] md:grid-cols-[0.85fr_1.4fr]">
          <Reveal className="md:sticky md:top-24">
            <span className="eyebrow mb-4 block">Who we are</span>
            <h2 className="balance text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              The home of <em className="not-italic text-accent-deep">Elmaculate</em> service and standards.
            </h2>
            <div className="my-6 h-px bg-steel-200" />
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 lg:grid-cols-4">
              <Stat value={30} suffix="+" label="Years" />
              <Stat value="AS1851" label="-2012" />
              <Stat value="SA·NT" label="Coverage" />
              <Stat value="PGE" label="342023" />
            </div>
          </Reveal>
          <div className="max-w-[62ch] text-[clamp(1.02rem,1.35vw,1.16rem)] text-[#2C353D]">
            <Reveal>
              <p>
                Welcome to Elmac — the home of Elmaculate service and standards. Elmac Cleaning Services is an industry
                leader in all professional commercial and industrial cleaning requirements for kitchens, kitchen
                exhausts and associated extraction and closed duct systems requiring full compliance certification and
                the highest standard of cleaning and maintenance.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5">
                We are proud to be associated with most of South Australia and the Northern Territory's leading
                commercial and industrial kitchens, where cleaning behind the scene is as transparent and important as
                the experience our clients provide their customers.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5">
                A proudly South Australian family-owned business with over{" "}
                <strong className="font-bold text-ink">30+ years' experience</strong> in the nature and need of
                commercial and industrial cleaning requirements — especially the strict Australian Standards followed
                by all commercial kitchens per <strong className="font-bold text-ink">AS1851-2012</strong>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROOF SLIDER ─────────────────────────────────────── */}
      <section className="bg-ink py-[clamp(56px,9vw,110px)] text-white">
        <div className="wrap grid items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-2">
          <Reveal>
            <span className="eyebrow eyebrow--accent">The Elmac finish</span>
            <h2 className="balance mt-3.5 text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Every clean, documented. Drag to see why.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[#AEB8C0]">
              Full photo reporting accompanies every compliance clean — canopies, fans, cowls, plenums, ductwork and
              risers, before and after. Transparency is the standard.
            </p>
            <div className="mt-7">
              <MagneticButton
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-bold text-ink hover:bg-[#22c0cd]"
              >
                Explore the services →
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter
              tease
              after={`${import.meta.env.BASE_URL}assets/hero-canopy.jpg`}
              note="Concept imagery — real job before/after photos to follow"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
