import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../lib/usePageMeta.js";

const SERVICES = [
  "Kitchen exhaust system cleaning",
  "Grease filter exchange",
  "Commercial kitchen deep clean / detail",
  "Pizza oven & equipment cleaning",
  "Pressure washing",
  "High access / facade cleaning",
  "KES installation",
  "Scheduled maintenance program",
  "Compliance documentation support",
];

const TIMING = [
  "No preference",
  "Business hours",
  "Early morning",
  "After hours / evening",
  "Night works",
  "Weekend",
];

const URGENCY = [
  ["routine", "Routine"],
  ["soon", "Within 2 weeks"],
  ["urgent", "Urgent"],
];

const field =
  "w-full rounded-lg border border-white/[0.14] bg-white/5 px-3.5 py-3 text-[0.95rem] text-white placeholder-[#67727b] focus:border-accent focus:bg-accent/[0.08] focus:outline-none";
const label = "font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#93A0A9]";
const check =
  "h-4 w-4 shrink-0 accent-[#14a6b4]";

export default function Contact() {
  usePageMeta(
    "Request a Commercial Quote | Elmac Cleaning Services",
    "Request a commercial cleaning quote or site inspection — kitchen exhaust cleaning, filter exchange, deep cleaning, pressure washing and maintenance programs across SA & NT. Compliance deadlines prioritised."
  );

  const [params] = useSearchParams();
  const [services, setServices] = useState(() => {
    const s = new Set();
    if (params.get("service") === "kes") s.add("Kitchen exhaust system cleaning");
    if (params.get("intent") === "compliance") s.add("Compliance documentation support");
    return s;
  });
  const [urgency, setUrgency] = useState("routine");
  const [deadline, setDeadline] = useState(params.get("intent") === "compliance");
  const [multiSite, setMultiSite] = useState(params.get("type") === "multi-site");
  const [note, setNote] = useState("Submits via your email app · or call 1800 4 ELMAC");

  const critical = urgency === "urgent" || deadline;

  const toggleService = (s) =>
    setServices((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });

  const submit = (e) => {
    e.preventDefault();
    // read via elements: form.name is the form's own name attribute, not the input
    const g = (n) => e.target.elements[n]?.value ?? "";
    const lines = [
      `Name: ${g("name")}`,
      `Business: ${g("business")}`,
      `Venue / site: ${g("venue")}`,
      `Email: ${g("email")}`,
      `Phone: ${g("phone")}`,
      `Site address: ${g("address")}`,
      `Services: ${[...services].join(", ") || "(not specified)"}`,
      `Canopies: ${g("canopies") || "unknown"} · Filters: ${g("filters") || "unknown"}`,
      `Preferred timing: ${g("timing")}`,
      `Urgency: ${URGENCY.find(([k]) => k === urgency)[1]}`,
      `Compliance deadline: ${deadline ? g("deadlineDate") || "yes — date TBC" : "no"}`,
      `Multi-site enquiry: ${multiSite ? "YES" : "no"}`,
      "",
      `Access & notes: ${g("notes")}`,
    ];
    const subject =
      (critical ? "[URGENT] " : "") + "Commercial quote request — " + (g("business") || g("name"));
    window.location.href = `mailto:info@elmac.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
    setNote("Opening your email app… if nothing happens, email info@elmac.au directly.");
  };

  return (
    <section className="bg-ink py-[clamp(52px,8vw,100px)] text-white">
      <div className="wrap grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="eyebrow eyebrow--accent">Request a quote or inspection</span>
          <h1 className="balance mt-3.5 text-[clamp(1.9rem,3.8vw,2.8rem)] font-extrabold tracking-[-0.02em]">
            Tell us about the site — we'll come and look.
          </h1>
          <p className="mt-4 max-w-[52ch] text-[#AEB8C0]">
            Commercial and industrial sites across South Australia and the Northern Territory. The more you can tell
            us, the faster the quote.
          </p>

          {critical && (
            <div className="mt-6 rounded-xl border border-[#E8730C]/60 bg-[#E8730C]/10 px-5 py-4">
              <p className="text-[0.95rem] font-bold text-[#F5A057]">
                Compliance-critical? Don't wait on a form —{" "}
                <a className="text-white underline" href="tel:1800435622">
                  call operations on 1800 4 ELMAC
                </a>
                . Deadline work is prioritised.
              </p>
            </div>
          )}

          <form className="mt-8 grid gap-4" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="n">Name</label>
                <input id="n" name="name" required placeholder="Your name" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="b">Business</label>
                <input id="b" name="business" placeholder="Company or group" className={field} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="v">Venue / site name</label>
                <input id="v" name="venue" placeholder="Site this enquiry is for" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="a">Site address</label>
                <input id="a" name="address" placeholder="Street, suburb" className={field} />
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

            <fieldset className="grid gap-2.5 rounded-xl border border-white/[0.14] p-4.5">
              <legend className={`${label} px-1.5`}>Service required — tick all that apply</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <label key={s} className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                    <input
                      type="checkbox"
                      className={check}
                      checked={services.has(s)}
                      onChange={() => toggleService(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="grid gap-1.5">
                <label className={label} htmlFor="c">Canopies (if known)</label>
                <input id="c" name="canopies" type="number" min="0" placeholder="e.g. 2" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="fl">Filters (if known)</label>
                <input id="fl" name="filters" type="number" min="0" placeholder="e.g. 12" className={field} />
              </div>
              <div className="grid gap-1.5">
                <label className={label} htmlFor="t">Preferred timing</label>
                <select id="t" name="timing" className={`${field} appearance-none`}>
                  {TIMING.map((t) => (
                    <option key={t} className="text-ink">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="rounded-xl border border-white/[0.14] p-4.5">
              <legend className={`${label} px-1.5`}>Urgency</legend>
              <div className="flex flex-wrap gap-2">
                {URGENCY.map(([k, t]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setUrgency(k)}
                    className={`rounded-lg border px-4 py-2 text-[0.88rem] font-bold transition-colors ${
                      urgency === k
                        ? k === "urgent"
                          ? "border-[#E8730C] bg-[#E8730C]/15 text-[#F5A057]"
                          : "border-accent bg-accent/15 text-accent"
                        : "border-white/[0.18] text-[#AEB8C0] hover:border-white/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <label className="mt-3.5 flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
                <input
                  type="checkbox"
                  className={check}
                  checked={deadline}
                  onChange={(e) => setDeadline(e.target.checked)}
                />
                There's a council / insurance / audit deadline
              </label>
              {deadline && (
                <div className="mt-3 grid max-w-[240px] gap-1.5">
                  <label className={label} htmlFor="dd">Deadline date</label>
                  <input id="dd" name="deadlineDate" type="date" className={field} />
                </div>
              )}
            </fieldset>

            <label className="flex cursor-pointer items-center gap-2.5 text-[0.9rem] text-[#DCE3E8]">
              <input
                type="checkbox"
                className={check}
                checked={multiSite}
                onChange={(e) => setMultiSite(e.target.checked)}
              />
              This is a multi-site / group enquiry
            </label>

            <div className="grid gap-1.5">
              <label className={label} htmlFor="m">Site access &amp; notes</label>
              <textarea
                id="m"
                name="notes"
                rows="4"
                placeholder="Access arrangements, systems, anything useful…"
                className={`${field} min-h-[100px] resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-1 justify-self-start rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink transition-colors hover:bg-[#22c0cd]"
            >
              Request quote / inspection
            </button>
            <p className="font-mono text-[0.74rem] tracking-[0.02em] text-[#7b8791]">{note}</p>
            <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
              Have photos of the canopy, filters or ducts? Attach them when your email opens — they help us quote
              faster.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="self-start overflow-hidden rounded-2xl border border-white/[0.12]">
          {[
            ["Phone", <><a className="text-accent no-underline hover:underline" href="tel:1800435622">1800 4 ELMAC</a> &nbsp;·&nbsp; <a className="text-accent no-underline hover:underline" href="tel:+61420452400">(+61) 0420 452 400</a></>],
            ["Email", <a className="text-accent no-underline hover:underline" href="mailto:info@elmac.au">info@elmac.au</a>],
            ["Address", "30 Chapman Road, Hackham SA 5163"],
            ["Service area", "South Australia & Northern Territory"],
            ["Accreditation", <span className="font-mono text-[0.9rem]">AS1851-2012 · AS1668 · PGE342023</span>],
            [
              "What happens next",
              <ol className="m-0 grid list-none gap-1.5 p-0 text-[0.9rem]">
                <li>1 · We acknowledge your enquiry</li>
                <li>2 · Site inspection if the scope needs it</li>
                <li>3 · Written quote — fixed scope</li>
                <li>4 · Scheduled around your trade</li>
              </ol>,
            ],
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
