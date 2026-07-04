// Rendered mock of the photo report issued after every compliance clean.
// Layout mirrors the real Elmac report format; content is representative,
// not a real client's data.
const mono = "font-mono text-[0.6rem] uppercase tracking-[0.14em]";

function PanePair() {
  return (
    <div className="grid w-[128px] shrink-0 grid-cols-2 gap-1">
      <div>
        <div className="pane-before h-12 rounded-[4px]" />
        <div className={`${mono} mt-0.5 text-center text-[#9aa4ac]`}>Before</div>
      </div>
      <div>
        <div className="pane-after h-12 rounded-[4px]" />
        <div className={`${mono} mt-0.5 text-center text-[#9aa4ac]`}>After</div>
      </div>
    </div>
  );
}

export default function ReportPreview({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-steel-200 bg-white text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] ${className}`}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-3 border-b border-steel-200 px-5 py-3.5">
        <span className="text-[0.95rem] font-extrabold tracking-wide">
          ELM<b className="text-accent-deep">A</b>C
        </span>
        <span className={`${mono} text-steel-600`}>Kitchen exhaust system — service report</span>
        <span className={`${mono} text-steel-400`}>KES-0000</span>
      </div>

      {/* meta grid */}
      <div className="grid grid-cols-2 gap-px border-b border-steel-200 bg-steel-200 sm:grid-cols-4">
        {[
          ["Site", "Commercial kitchen, Adelaide"],
          ["Service date", "DD / MM / YYYY"],
          ["Technicians", "2 × Elmac KES"],
          ["Standard", "AS1851-2012"],
        ].map(([k, v]) => (
          <div key={k} className="bg-white px-4 py-2.5">
            <div className={`${mono} text-steel-400`}>{k}</div>
            <div className="mt-0.5 text-[0.8rem] font-semibold">{v}</div>
          </div>
        ))}
      </div>

      {/* status banner */}
      <div className="border-b border-steel-200 bg-accent/[0.1] px-5 py-2.5">
        <span className={`${mono} font-bold text-accent-deep`}>
          ● System cleaned — compliant cycle maintained
        </span>
      </div>

      {/* system sections */}
      {[
        ["01", "Canopy & filters", "Heavy grease load removed; filters exchanged."],
        ["02", "Riser & exhaust fan", "Fan blades degreased; belt wear noted and flagged."],
      ].map(([n, t, note]) => (
        <div key={n} className="flex items-center gap-4 border-b border-steel-200 px-5 py-3">
          <span className="font-mono text-[0.7rem] font-bold text-accent-deep">{n}</span>
          <div className="min-w-0 flex-1">
            <div className="text-[0.86rem] font-bold">{t}</div>
            <div className="truncate text-[0.76rem] text-steel-600">{note}</div>
          </div>
          <PanePair />
        </div>
      ))}

      {/* defects + access */}
      <div className="grid gap-1.5 border-b border-steel-200 px-5 py-3.5">
        <div className={`${mono} text-[#b05c10]`}>
          ▲ Defect — access panel missing on horizontal duct run. Remediation quoted separately.
        </div>
        <div className={`${mono} text-steel-600`}>
          ◆ Access — 2.1 m of vertical riser inaccessible; documented with recommendation.
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5">
        <span className={`${mono} text-steel-600`}>Recommended next service: 6-monthly cycle</span>
        <span className={`${mono} font-bold text-accent-deep`}>Certificate issued ✓</span>
      </div>
    </div>
  );
}
