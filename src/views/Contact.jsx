import { useState } from "react";
import Reveal from "../components/Reveal.jsx";

const SERVICES = [
  "Kitchen exhaust, extraction & deep cleaning",
  "Grease filter clean & exchange",
  "Pizza oven & equipment deep clean",
  "Hot & cold pressure washing",
  "Exhaust & extraction installation",
  "Commercial & kitchen deep clean / detail",
  "Something else",
];

const field =
  "w-full rounded-lg border border-white/[0.14] bg-white/5 px-3.5 py-3 text-[0.98rem] text-white placeholder-[#67727b] focus:border-accent focus:bg-accent/[0.08] focus:outline-none";
const label = "font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#93A0A9]";

export default function Contact() {
  const [note, setNote] = useState("Opens in your email app · or call 1800 4 ELMAC");

  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const body = `Name: ${f.name.value}\nBusiness: ${f.business.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nService: ${f.service.value}\n\n${f.message.value}`;
    window.location.href = `mailto:info@elmac.au?subject=${encodeURIComponent(
      "Website enquiry — " + (f.business.value || f.name.value)
    )}&body=${encodeURIComponent(body)}`;
    setNote("Opening your email app… if nothing happens, email info@elmac.au directly.");
  };

  return (
    <section className="bg-ink py-[clamp(56px,9vw,110px)] text-white">
      <div className="wrap grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="eyebrow eyebrow--accent">Contact us</span>
          <h1 className="balance mt-3.5 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em]">
            Let's talk about your kitchen's compliance.
          </h1>
          <p className="mt-4 max-w-[46ch] text-[#AEB8C0]">
            Tell us about your site and requirements. We service commercial and industrial kitchens right across South
            Australia and the Northern Territory.
          </p>

          <form className="mt-8 grid gap-4" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="n">Name</label>
                <input id="n" name="name" required placeholder="Your name" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="b">Business / venue</label>
                <input id="b" name="business" placeholder="Venue or company" className={field} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="e">Email</label>
                <input id="e" name="email" type="email" required placeholder="you@venue.com.au" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="p">Phone</label>
                <input id="p" name="phone" placeholder="04XX XXX XXX" className={field} />
              </div>
            </div>
            <div className="grid gap-1.5">
              <label className={label} htmlFor="s">Service of interest</label>
              <select id="s" name="service" className={`${field} appearance-none`}>
                {SERVICES.map((s) => (
                  <option key={s} className="text-ink">{s}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className={label} htmlFor="m">Message</label>
              <textarea
                id="m"
                name="message"
                rows="4"
                placeholder="Tell us about your site, systems and timing…"
                className={`${field} min-h-[110px] resize-y`}
              />
            </div>
            <button
              type="submit"
              className="mt-1 justify-self-start rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink transition-colors hover:bg-[#22c0cd]"
            >
              Send enquiry
            </button>
            <p className="font-mono text-[0.78rem] tracking-[0.02em] text-[#7b8791]">{note}</p>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="self-start overflow-hidden rounded-2xl border border-white/[0.12]">
          {[
            ["Phone", <><a className="text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC</a> &nbsp;·&nbsp; <a className="text-accent no-underline hover:underline" href="tel:+61420452400">(+61) 0420 452 400</a></>],
            ["Email", <a className="text-accent no-underline hover:underline" href="mailto:info@elmac.au">info@elmac.au</a>],
            ["Address", "30 Chapman Road, Hackham SA 5163"],
            ["Service area", "South Australia & Northern Territory"],
            ["Accreditation", <span className="font-mono text-[0.9rem]">AS1851-2012 · AS1668 · PGE342023</span>],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-white/10 px-5.5 py-5 last:border-b-0">
              <div className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#7f8b94]">{k}</div>
              <div className="mt-1.5 text-[1.02rem] text-[#EAEFF2]">{v}</div>
            </div>
          ))}
          <div className="px-5.5 py-5">
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#7f8b94]">Follow</div>
            <div className="mt-2.5 flex gap-2.5">
              {[
                ["Fb", "Facebook"],
                ["Ig", "Instagram"],
                ["In", "LinkedIn"],
              ].map(([t, aria]) => (
                <a
                  key={t}
                  href="#"
                  aria-label={`${aria} (link to be added)`}
                  title="Add link"
                  className="grid h-9.5 w-9.5 place-items-center rounded-lg border border-white/[0.16] font-mono text-[0.9rem] font-bold text-[#DCE3E8] no-underline hover:border-accent hover:text-accent"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
