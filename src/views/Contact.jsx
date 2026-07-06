import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Doctrine from "../components/Doctrine.jsx";
import usePageMeta from "../lib/usePageMeta.js";
import track from "../lib/track.js";

// FormSubmit.co — account-less static form relay to operations@elmac.au.
// The first submission triggers a one-click activation email to that inbox;
// until it's activated (or if the relay ever errors) the copy + mailto fallback
// carries the enquiry, so nothing is ever lost. To move to Formspree/Basin
// later, replace this URL only — payload and states already fit.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/operations@elmac.au";
const EMAIL = "operations@elmac.au";

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
  "Window & louvre cleaning",
  "Industrial / shutdown-window cleaning",
  "Soft washing",
  "Heated soak tank — supply, rental & servicing",
];

// Canonical ?service= slugs → checkbox labels. Service-page CTAs link here with these.
const SERVICE_SLUGS = {
  kes: "Kitchen exhaust system cleaning",
  filters: "Grease filter exchange",
  "deep-clean": "Commercial kitchen deep clean / detail",
  pressure: "Pressure washing",
  "high-access": "High access / facade cleaning",
  install: "KES installation",
  program: "Scheduled maintenance program",
  window: "Window & louvre cleaning",
  industrial: "Industrial / shutdown-window cleaning",
  "soft-wash": "Soft washing",
  tank: "Heated soak tank — supply, rental & servicing",
};

const ROLES = ["Owner / Manager", "Chef", "Facility manager", "Property / centre manager", "Other"];

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
  "h-4 w-4 shrink-0 accent-[#3ba5dc]";

export default function Contact() {
  usePageMeta(
    "Request a Commercial Quote | Elmac Cleaning Services",
    "Request a commercial cleaning quote or site inspection — kitchen exhaust cleaning, filter exchange, deep cleaning, pressure washing and maintenance programs across SA & NT. Compliance deadlines prioritised."
  );

  const [params] = useSearchParams();
  const [services, setServices] = useState(() => {
    const s = new Set();
    const mapped = SERVICE_SLUGS[params.get("service")];
    if (typeof mapped === "string") s.add(mapped);
    if (params.get("type") === "multi-site") s.add("Scheduled maintenance program");
    if (params.get("intent") === "compliance") s.add("Compliance documentation support");
    return s;
  });
  const [urgency, setUrgency] = useState("routine");
  const [deadline, setDeadline] = useState(false);
  const [multiSite, setMultiSite] = useState(params.get("type") === "multi-site");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | fallback
  const [composed, setComposed] = useState(null);
  const [copied, setCopied] = useState(false);

  const critical = urgency === "urgent" || deadline;

  const toggleService = (s) =>
    setServices((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });

  const submit = async (e) => {
    e.preventDefault();
    // read via elements: form.name is the form's own name attribute, not the input
    const g = (n) => e.target.elements[n]?.value ?? "";
    const selected = [...services];
    const fields = {
      name: g("name"),
      business: g("business"),
      venue: g("venue"),
      role: g("role"),
      email: g("email"),
      phone: g("phone"),
      address: g("address"),
      services: selected.join(", ") || "(not specified)",
      canopies: g("canopies") || "unknown",
      filters: g("filters") || "unknown",
      last_serviced: g("lastServiced") || "not specified",
      timing: g("timing"),
      urgency: URGENCY.find(([k]) => k === urgency)[1],
      deadline: deadline ? g("deadlineDate") || "yes — date TBC" : "no",
      multi_site: multiSite ? "YES" : "no",
      venues: multiSite ? g("venues") || "unknown" : "n/a",
      notes: g("notes"),
    };
    const lines = [
      `Name: ${fields.name}`,
      `Business: ${fields.business}`,
      `Venue / site: ${fields.venue}`,
      `Role: ${fields.role}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Site address: ${fields.address}`,
      `Services: ${fields.services}`,
      `Canopies: ${fields.canopies} · Filters: ${fields.filters}`,
      `Last serviced (approx.): ${fields.last_serviced}`,
      `Preferred timing: ${fields.timing}`,
      `Urgency: ${fields.urgency}`,
      `Compliance deadline: ${fields.deadline}`,
      `Multi-site enquiry: ${fields.multi_site}`,
      `Number of venues: ${fields.venues}`,
      "",
      `Access & notes: ${fields.notes}`,
    ];
    const subject =
      (critical ? "[URGENT] " : "") +
      (services.has(SERVICE_SLUGS.tank) ? "[TANK] " : "") +
      (multiSite ? "[MULTI-SITE] " : "") +
      "Commercial quote request — " +
      (fields.business || fields.name) +
      (selected.length ? ` — ${selected[0]}` : "") +
      (selected.length > 1 ? ` + ${selected.length - 1} more` : "");
    const body = lines.join("\n");
    setComposed({ subject, body });
    setCopied(false);

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...fields,
            _subject: subject,
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data || String(data.success) === "false") throw new Error(`endpoint ${res.status}`);
        setStatus("success");
        track("form_submit_success", { services: fields.services, urgency, deadline: String(deadline) });
        return;
      } catch {
        setStatus("error");
        track("form_submit_error", { services: fields.services });
        track("fallback_rendered", { reason: "endpoint_error" });
        return;
      }
    }

    // No endpoint configured: mailto attempt + always-visible copy fallback.
    setStatus("fallback");
    track("form_submit_success", { services: fields.services, urgency, transport: "mailto" });
    track("fallback_rendered", { reason: "no_endpoint" });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEnquiry = async () => {
    if (!composed) return;
    const text = `To: ${EMAIL}\nSubject: ${composed.subject}\n\n${composed.body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      track("enquiry_copy", { fallback: "clipboard" });
    } catch {
      setCopied(false);
    }
  };

  const showFallback = composed && (status === "error" || status === "fallback");

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
          <Doctrine n={11} dark />

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

          {status === "success" ? (
            <div className="mt-8 rounded-xl border border-accent/[0.5] bg-accent/[0.08] p-6">
              <h2 className="text-[1.15rem] font-extrabold text-accent">Enquiry received.</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#DCE3E8]">
                It's gone straight to Elmac operations. Deadline work is prioritised — if it can't wait, call{" "}
                <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622">
                  1800 4 ELMAC (1800 435 622)
                </a>
                .
              </p>
            </div>
          ) : (
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
                  <input id="p" name="phone" required placeholder="04XX XXX XXX" className={field} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="ro">Your role</label>
                  <select id="ro" name="role" className={`${field} appearance-none`}>
                    {ROLES.map((r) => (
                      <option key={r} className="text-ink">{r}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <label className={label} htmlFor="ls">Last serviced (approx.)</label>
                  <input id="ls" name="lastServiced" placeholder="e.g. Feb 2026 · or 'not sure'" className={field} />
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
              {multiSite && (
                <div className="grid max-w-[240px] gap-1.5">
                  <label className={label} htmlFor="nv">Number of venues</label>
                  <input id="nv" name="venues" type="number" min="1" placeholder="e.g. 4" className={field} />
                </div>
              )}

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
                disabled={status === "sending"}
                className="mt-1 justify-self-start rounded-lg bg-accent px-6 py-3.5 text-[0.98rem] font-bold text-ink transition-colors hover:bg-[#57bce8] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request quote / inspection"}
              </button>
              {status === "error" && (
                <p className="font-mono text-[0.78rem] font-bold text-[#F5A057]">
                  The form couldn't send just now — nothing is lost. Copy your enquiry below and email it, or call
                  1800 4 ELMAC (1800 435 622).
                </p>
              )}
              <p className="font-mono text-[0.74rem] tracking-[0.02em] text-[#7b8791]">
                Sends directly to Elmac operations · or call 1800 4 ELMAC (1800 435 622)
              </p>
              <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
                Your details go to Elmac operations only — used to scope and quote this enquiry, nothing else.
              </p>
              <p className="font-mono text-[0.7rem] tracking-[0.02em] text-[#67727b]">
                Have photos of the canopy, filters or ducts? Email them to {EMAIL} — they help us quote faster.
              </p>

              {showFallback && (
                <div className="rounded-xl border border-accent/[0.4] bg-accent/[0.06] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                      Your enquiry — ready to paste
                    </span>
                    <button
                      type="button"
                      onClick={copyEnquiry}
                      className="rounded-md border border-accent/60 px-3.5 py-1.5 text-[0.82rem] font-bold text-accent transition-colors hover:bg-accent hover:text-ink"
                    >
                      {copied ? "Copied ✓" : "Copy enquiry"}
                    </button>
                  </div>
                  <p className="mt-2.5 text-[0.85rem] text-[#AEB8C0]">
                    Copy it into any email to{" "}
                    <a
                      className="font-bold text-accent no-underline hover:underline"
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(composed.subject)}&body=${encodeURIComponent(composed.body)}`}
                    >
                      {EMAIL}
                    </a>{" "}
                    — or call{" "}
                    <a className="font-bold text-accent no-underline hover:underline" href="tel:1800435622">
                      1800 4 ELMAC (1800 435 622)
                    </a>
                    .
                  </p>
                  <pre className="mt-3 max-h-[220px] overflow-auto whitespace-pre-wrap rounded-lg bg-black/40 p-4 font-mono text-[0.76rem] leading-relaxed text-[#DCE3E8]">
{`Subject: ${composed.subject}\n\n${composed.body}`}
                  </pre>
                </div>
              )}
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1} className="self-start overflow-hidden rounded-2xl border border-white/[0.12]">
          {[
            [
              "Phone",
              <>
                <a
                  className="text-accent no-underline hover:underline"
                  href="tel:1800435622"
                  onClick={() => track("phone_click", { from: "contact-sidebar", line: "1800" })}
                >
                  1800 4 ELMAC
                </a>
                <br />
                <a
                  className="text-accent no-underline hover:underline"
                  href="tel:+61420452400"
                  onClick={() => track("phone_click", { from: "contact-sidebar", line: "mobile" })}
                >
                  +61 420 452 400
                </a>{" "}
                — Caleb Rowlands, Operations Manager
              </>,
            ],
            ["Email", <a className="text-accent no-underline hover:underline" href="mailto:operations@elmac.au">operations@elmac.au</a>],
            ["Address", "30 Chapman Road, Hackham SA 5163"],
            ["Service area", "South Australia & Northern Territory"],
            ["Standards & licence", <span className="font-mono text-[0.9rem]">PGE342023 (licence) · AS1851-2012 · AS 1668.2</span>],
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
        </Reveal>
      </div>
    </section>
  );
}
